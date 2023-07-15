import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  Container, Table } from 'react-bootstrap'
// import ResourceOptions from '../ResourceOptions';
// import ResourceTabs from './ResourceTabs';

function ResourcePayStubs() {
  const URL = "http://localhost:4000/employeePayStubs";

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Container fluid className='p-2'>
        <Table responsive hover className="l-table">
          <thead>
            <tr>
              <th>Pay Date</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Hours</th>
              <th>EMS</th>
              <th>Differece</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((list, index) => {
              return (
                <tr key={index}>
                  <td>{list.payDate}</td>
                  <td>{list.startDate}</td>
                  <td>{list.endtDate}</td>
                  <td>{list.hours}</td>
                  <td>{list.ems}</td>
                  <td>{list.difference}</td>
                  <td className="text-center">
                    {/* <ResourceOptions eachDetail={list}/> */}
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

export default ResourcePayStubs;