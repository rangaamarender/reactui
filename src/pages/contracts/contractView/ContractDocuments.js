import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Nav,Navbar } from "react-bootstrap";
import ContractAddEditDocument from "./ContractAddEditDocument";
import ContractDocumentOptions from "./ContractDocumentOptions";
import {BsFillPlusSquareFill} from "react-icons/bs"

function ContractDocuments() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/contractDocuments")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container fluid className="p2">
        {/* <Row className="mt-2">
          <Col>
            <p>Showing 3 entries</p>
          </Col>
          <Col className="d-inline-flex ">
            <ContractAddEditDocument
              addEditComponent={"add"}
              title={"Add Document"}
              className="mt-1"
            />
            <Form className="ms-3 ">
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
            <Navbar.Brand href="#"><p>Showing 3 Entries</p></Navbar.Brand>
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
              <th>Title</th>
              <th>Resource ID</th>
              <th>Doc.Number</th>
              <th>Upload Date</th>
              <th>Expire Date</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((list, index) => {
              return (
                <tr key={index}>
                  <td>{list.title}</td>
                  <td>{list.resourceID}</td>
                  <td>{list.doc_Number}</td>
                  <td>{list.uploadDate}</td>
                  <td>{list.expeirDate}</td>
                  <td className="l-text-center">
                    <ContractDocumentOptions />
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

export default ContractDocuments;
