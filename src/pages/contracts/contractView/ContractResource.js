import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Nav,Navbar } from "react-bootstrap";
import ContractAddEditDocument from "./ContractAddEditDocument";
import ContractDocumentOptions from "./ContractDocumentOptions";
import ContractRateOptions from "./ContractRateOptions";


function ContractResource() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/contractResources")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container fluid className="p2">

     {/* <Row className="mt-2">
        <Col>
        <p>Showing 4 entries</p>
        </Col>
        <Col className="text-end ">
        <ContractAddEditDocument  addEditComponent={"add"} title={"Add Document"}    />
        <Form  className="d-inline-flex ms-3 pt-1">
            <Form.Control
              type="search" 
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Col>
     </Row> */}
<Navbar bg="" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><p>Showing 4 Entries</p></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

              </Nav>
              <Form className="d-flex">
                <ContractAddEditDocument
                 addEditComponent={"add"}
              title={"Add Document"}
                />
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Table hover className="l-table">
          <thead>
            <tr>
              <th>Resource ID</th>
              <th>Resource Name</th>
              <th>Roll</th>
              <th>Vendor</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((list, index) => {
              return (
                <tr key={index}>
                  <td>
                      {list.resourceId}
                  </td>
                  <td>{list.resourceName}</td>
                  <td>{list.roll}</td>
                  <td>{list.StartDate}</td>
                  <td>{list.endDate}</td>
                  <td>{list.status}</td>
                  <td className="l-text-center">
                    <ContractRateOptions/>
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

export default ContractResource;
