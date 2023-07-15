import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Container, Table } from 'react-bootstrap'
// import ResourceOptions from '../ResourceOptions';
// import ResourceTabs from './ResourceTabs';

function ResourceTimesheets() {
  const URL = "http://localhost:4000/employeeTimesheet";

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
              <th>Project ID</th>
              <th>Project Title</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Hours</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((list, index) => {
              return (
                <tr key={index}>
                  <td>{list.projectId}</td>
                  <td>{list.projectTitle}</td>
                  <td>{list.startDate}</td>
                  <td>{list.endtDate}</td>
                  <td>{list.hours}</td>
                  <td>{list.status}</td>
                  <td className="text-center">
                    {/* <ResourceOptions eachDetail={list}/> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button className='l-color-orange' variant="light"><span className=''> + </span> Add New</Button>
      </Container>
    </>
  )
}

export default ResourceTimesheets;