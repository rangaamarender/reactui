import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import TableComponent from "./TableComponent";
import ReceivingComponent from "./ReceivingComponent";

const Testing2 = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
  };

  return (
    <>
      <Container fluid className='p-3'>
        <h6>Testing Page</h6>

        <TableComponent onRowClick={handleRowClick} />
        <ReceivingComponent rowData={selectedRowData} />

      </Container>

    </>
  )
}

export default Testing2