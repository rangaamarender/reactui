import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, InputGroup, Row } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import { Form } from "react-router-dom";

const Testing = () => {

  var column = [
    {
      name: 'Invoice ID',
      sortable: true,
      selector: row => row.invioceId
    },
    {
      name: 'Due Date',
      sortable: true,
      selector: row => row.dueDate
    },
    {
      name: 'Paid On',
      sortable: true,
      selector: row => row.paidOn
    },
    {
      name: 'Balance Due',
      sortable: true,
      selector: row => row.balanceDue
    },
    {
      name: 'Total',
      sortable: true,
      selector: row => row.total
    },
    // {
    //   // name: 'Options',
    //   // sortable: true,
    //   // selector: row => row.total
    // },
  ];
  useEffect(() => {
    const fetchData = async () => {
      axios.get("http://localhost:4000/invoice")
        .then(res => setRecords(res.data))
        .then(err => console.log(err));
    }
    fetchData();
  }, []);
  const [records, setRecords] = useState([])
  const handleFilter = (event) => {
    const newData = records.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setRecords(newData);
  }

  return (
    <>
      <Container fluid className='p-3'>
        <h3 className="p-2 text-center"> Testing Page with sorting the data</h3>
        <div>
          {/* <input type="text" placeholder="search...." onChange={handleFilter} /> */}
        </div>
        <DataTable striped pointerOnHover
          columns={column}
          data={records}
          pagination
          selectableRows
        >
        </DataTable>
      </Container>
    </>
  )
}

export default Testing