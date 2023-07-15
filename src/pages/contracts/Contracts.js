import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import ContractOptions from "./ContractOptions";
import ContractTabs from "./ContractTabs";
import Widget from "../../components/reusable/Widget";
import { Skeleton } from "primereact/skeleton";

function Contracts({ setTitle }) {
  const [data, setData] = useState([]);
  const [widgets, setWidgets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contractsResponse = await axios.get("http://localhost:4000/contracts");
        setData(contractsResponse.data);
      } catch (error) {
        console.log(error);
      }

      try {
        const widgetResponse = await axios.get('http://localhost:4000/resourcesWidget');
        setWidgets(widgetResponse.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    setTitle("Contracts")
    fetchData();
  }, []);

  return (
    <div>
      <Container fluid className="p-2">
        <>
          {loading ? (
            <>
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
            </>
          ) : (
            <>
              {widgets.map((item) => (
                <Row className="mb-2" key={item.id}>
                  <Col>
                    <Widget title="Total Contracts" value={item.billableEmployees} graphData="" />
                  </Col>
                  <Col>
                    <Widget title="Active Contracts" value={item.nonBillableEmployees} graphData="" />
                  </Col>
                  <Col>
                    <Widget title="Inactive Contracts" value={item.w2Employees} graphData="" />
                  </Col>
                  <Col>
                    <Widget title="Total Invoices" value={item.c2cEmployees} graphData="" />
                  </Col>
                </Row>
              ))}
            </>
          )}
        </>
      
        <ContractTabs />
        <Table responsive hover className="l-table">
          <thead>
            <tr>
              <th>Contract ID</th>
              <th>Contract Title Name</th>
              <th>Contract Owner</th>
              <th>Resources</th>
              <th>Client Name</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>Expiring On</th>
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
                        // title="Toggle All Rows Selected"
                        type="checkbox"
                        className="form-check-input"
                      />
                      {list.contractId}
                    </div>
                  </td>
                  <td>{list.contractTitle}</td>
                  <td>{list.contractOwner}</td>
                  <td>{list.resources}</td>
                  <td>{list.clientName}</td>
                  <td>{list.location}</td>
                  <td>{list.startDate}</td>
                  <td>{list.endDate}</td>
                  <td className="l-text-center">
                    <ContractOptions eachDetail={list} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Contracts;
