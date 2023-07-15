import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Container, Table, Col, Row } from 'react-bootstrap';
import ResourceOptions from './ResourceOptions';
import ResourceTabs from './ResourceTabs';
import Widget from '../../components/reusable/Widget';
import { Skeleton } from 'primereact/skeleton';
import { Toast } from 'primereact/toast';

function Resources({ setTitle }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [widgets, setWidgets] = useState([]);
  const toastRef = useRef(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/resources");
        setData(res.data);
        if (isFirstRender) {
          toastRef.current.show({ severity: 'success', summary: 'Success', detail: 'Resource data fetched successfully.', life: 1000 });
        }
      } catch (err) {
        console.log("Error: ", err);
        toastRef.current.show({ severity: 'error', summary: 'Error', detail: 'Incorrect API response. Failed to fetch resource data.', life: 2000 });
      }

      try {
        setTimeout(async () => {
          const response = await axios.get("http://localhost:4000/resourcesWidget");
          if (response.status === 200 && response.data) {
            setWidgets(response.data);
            setLoading(false); // Set loading to false once data is fetched
            if (isFirstRender) {
              toastRef.current.show({ severity: 'success', summary: 'Success', detail: 'Widget data fetched successfully.', life: 1000 });
            }
          } else {
            toastRef.current.show({ severity: 'error', summary: 'Error', detail: 'Incorrect API response. Please try again later.', life: 1000 });
          }
        }, 1000); // Delay of 1 second
      } catch (err) {
        console.log("Error: ", err);
        toastRef.current.show({ severity: 'error', summary: 'Error', detail: 'Incorrect API response. Failed to fetch widget data.', life: 2000 });
      }
    };
    setTitle("Resources");
    fetchData();
    setIsFirstRender(false);
  }, []);

  return (
    <>
      <Toast ref={toastRef} />
      <Container fluid className='p-2'>
        <>
          {loading ? ( // Display skeletons when loading is true
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

        {/* widgets end */}

        <ResourceTabs />
        <Table responsive hover className="l-table">
          <thead>
            <tr>
              <th>Resource ID</th>
              <th>Resource</th>
              <th>Roll</th>
              <th>Vendor</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((list, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div class="form-check fs-0 mb-0">
                      <input
                        // title="Toggle All Rows Selected"
                        type="checkbox"
                        class="form-check-input"
                      />
                      {list.resourceId}
                    </div>
                  </td>
                  <td>{list.resourceName}</td>
                  <td>{list.roll}</td>
                  <td>{list.vendor}</td>
                  <td>{list.joinDate}</td>
                  <td>{list.status}</td>
                  <td className="text-center">
                    <ResourceOptions eachDetail={list} />
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

export default Resources;
