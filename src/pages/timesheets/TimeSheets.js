import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import TimeSheetOptions from "./TimeSheetOptions";
import Widget from "../../components/reusable/Widget";
import { Skeleton } from "primereact/skeleton";
import TimesheetTabs from "./TimesheetTabs";

function Contracts({ setTitle }) {
  const [data, setData] = useState([]);
  const [widgets, setWidgets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/timesheet");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }

      try {
        setTimeout(async () => {
          const widgetResponse = await axios.get('http://localhost:4000/resourcesWidget');
          setWidgets(widgetResponse.data);
          setIsLoading(false);
        }, 2000); // Simulating a delay of 2 seconds
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    setTitle("Time Sheet")
    fetchData();
  }, []);

  return (
    <>
      <Container fluid className="p-2 ">
        <>
          {isLoading ? (
            <Row className="mb-2">
              <Col>
                <Skeleton width="100%" height="80px" />
              </Col>
              <Col>
                <Skeleton width="100%" height="80px" />
              </Col>
              <Col>
                <Skeleton width="100%" height="80px" />
              </Col>
              <Col>
                <Skeleton width="100%" height="80px" />
              </Col>

            </Row>
          ) : (
            widgets.map((item) => (
              <Row className="mb-2">
                <Col><Widget title="Billable Employees" value={item.billableEmployees} graphData="" /></Col>
                <Col><Widget title="Non Billable Employees" value={item.nonBillableEmployees} graphData="" /></Col>
                <Col><Widget title="W2 Employees" value={item.w2Employees} graphData="" /></Col>
                <Col><Widget title="C2C Employees" value={item.c2cEmployees} graphData="" /></Col>
              </Row>
            ))
          )}
        </>
        <TimesheetTabs />
        <Table responsive hover className="l-table">
          <thead>
            <tr>
              <th>Resource</th>
              <th>Role</th>
              <th>Type</th>
              <th>Contract ID</th>
              <th>Contract Title</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Total Hours</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((list, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="form-check fs-0 mb-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                      />
                      {list.resource}
                    </div>
                  </td>
                  <td>{list.role}</td>
                  <td>{list.type}</td>
                  <td>{list.contractID}</td>
                  <td>{list.contractTitle}</td>
                  <td>{list.startDate}</td>
                  <td>{list.endDate}</td>
                  <td>{list.totalHrs}</td>
                  <td>{list.status}</td>
                  <td className="l-text-center">
                    <TimeSheetOptions eachDetail={list} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Contracts;
