import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

function ContractAddEmployee() {

  const [show, setShow] = useState(false);
  const [changeStatus, setChangeStatus] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onHandleUpdate = () => {
    if (changeStatus) {
      setChangeStatus(false);
      return;
    }
  };


  return (
    <>
    <Dropdown.Item onClick={handleShow}>Add Employee</Dropdown.Item>
      {/* <Container fluid>
        <Row className="g-3 mb-2">
          <Col md>
            <Form.Label>Employee</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">W2 Employee</option>
              <option value="2">C2C Employee</option>
              <option value="3">1099 Employee</option>
            </Form.Select>
          </Col>
          <Col md>
            <Form.Label>Experied On</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
        <Row className="g-3 mb-2">
          <Col md>
            <Form.Label>Work Email</Form.Label>
            <Form.Control type="text" placeholder="--" />
          </Col>
          <Col md>
            <Form.Label>Work Phone</Form.Label>
            <Form.Control type="text" placeholder="--" />
          </Col>
        </Row>
        <Row className="g-3 mb-2">
          <Col>
            <Form.Label>Vendor</Form.Label>
            <Form.Control type="text" placeholder="--" />
          </Col>
        </Row>

        <Row className="g-3 mb-2">
          <Col md>
            <Form.Label>Supervisor</Form.Label>
            <Form.Control type="text" placeholder="--" />
          </Col>
          <Col md>
            <Form.Label>Supervisor Title</Form.Label>
            <Form.Control type="text" placeholder="--" />
          </Col>
        </Row>

        <Row className="g-3 mb-2">
          <Col md>
            <Form.Label>Supervisor Email</Form.Label>
            <Form.Control type="text" placeholder="--" />
          </Col>
          <Col md>
            <Form.Label>Supervisor Phone</Form.Label>
            <Form.Control type="text" placeholder="--" />
          </Col>
        </Row>

        <Row className="g-3 mb-2">
          <Col md>
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" placeholder="--" />
          </Col>
          <Col md>
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" placeholder="--" />
          </Col>
        </Row>

        <h5>WO Rate</h5>

        <Row className="g-3 mb-2">
          <Col md="3">
            <Form.Label>Wo Rate</Form.Label>
            <Form.Control type="text" placeholder="--" />
          </Col>
          <Col md="3">
            <Form.Label>WO Rate Type</Form.Label>
            <Form.Select type="text" placeholder="--">
              <option>Type-1</option>
              <option>Type-2</option>
              <option>Type-3</option>
            </Form.Select>
          </Col>
          <Col md="6">
            <Form.Label>Wo Type</Form.Label>
            <Form.Select type="text" placeholder="--">
              <option>Type-1</option>
              <option>Type-2</option>
              <option>Type-3</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="g-3 mb-2">
          <Col md>
            <Form.Label>Payment Type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Type-1</option>
              <option>Type-2</option>
              <option>Type-3</option>
            </Form.Select>
          </Col>
          <Col md>
            <Form.Label>Invoice Cycle</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Type-1</option>
              <option>Type-2</option>
              <option>Type-3</option>
            </Form.Select>
          </Col>
        </Row>

        <h5>Documents</h5>
        <Row className="g-3 mb-2">
          <Col md="6">
            <Form.Label>Number</Form.Label>
            <Form.Control type="text" placeholder="--" />
          </Col>
          <Col md="3">
            <Form.Label>Issue Date</Form.Label>
            <Form.Control type="date" placeholder="--" />
          </Col>
          <Col md="3">
            <Form.Label>Exp Date</Form.Label>
            <Form.Control type="date" placeholder="--" />
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default ContractAddEmployee;
