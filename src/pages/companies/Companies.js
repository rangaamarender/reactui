import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Col, Container, Row, Table } from 'react-bootstrap'
import CompaniesWidgets from './CompaniesWidgets';
import CompaniesOptions from './CompaniesOptions';
import CompaniesTabs from './CompaniesTabs';
import Widget from '../../components/reusable/Widget';
// import ResourceTabs from './ResourceTabs';

function Companies({ setTitle }) {
  const URL_RESOURCES = "http://localhost:4000/companies";
  // const URL_RESOURCES = "http://192.168.40.59:8080/api/raves/v1/organization";

  const [data, setData] = useState([]);
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    axios
      .get(URL_RESOURCES)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setTitle("Companies");

    var widgetResponse = axios.get('http://localhost:4000/resourcesWidget')
      .then(response => {
        setWidgets(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <>
      <Container fluid className='p-2'>
        {/* <CompaniesWidgets /> */}
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
        <CompaniesTabs />
        <Table responsive striped hover className="l-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Location</th>
              <th>Role</th>
              <th>CEO Name</th>
              <th>CEO Phone</th>
              <th>Created On</th>
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
                      {list.companyName}
                    </div>
                  </td>
                  <td>{list.location}</td>
                  <td>{list.role}</td>
                  <td>{list.ceoName}</td>
                  <td>{list.ceoPhone}</td>
                  <td>{list.createdOn}</td>
                  <td className="text-center">
                    <CompaniesOptions eachDetail={list} />
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

export default Companies;