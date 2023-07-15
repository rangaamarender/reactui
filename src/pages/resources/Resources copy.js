import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Table, Col, Row } from 'react-bootstrap'
import ResourceOptions from './ResourceOptions';
import ResourceWidgets from './ResourceWidgets';
// import withLayout from '../../components/LayoutHOC';
import ResourceTabs from './ResourceTabs';
import Widget from '../../components/reusable/Widget';

function Resources() {
  // const URL_RESOURCES = "http://localhost:4000/resources";

  const [data, setData] = useState([]);
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/resources");
        setData(res.data);

        const response = await axios.get("http://localhost:4000/resourcesWidget");
        setWidgets(response.data)
      } catch (err) {
        console.log("Error : ", err)
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Container fluid className='p-2'>
        <>
          {
            widgets.map((item) => (
              <Row className="mb-2">
                <Col><Widget title="Billable Employees" value={item.billableEmployees} graphData="" /></Col>
                <Col><Widget title="Non Billable Employees" value={item.nonBillableEmployees} graphData="" /></Col>
                <Col><Widget title="W2 Employees" value={item.w2Employees} graphData="" /></Col>
                <Col><Widget title="C2C Employees" value={item.c2cEmployees} graphData="" /></Col>
              </Row>
            ))
          }
        </>
        {/* <ResourceWidgets /> */}
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
  )
}

// export default withLayout(Resources);

export default Resources;