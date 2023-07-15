import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, InputGroup } from "react-bootstrap";
import { RiPencilFill } from 'react-icons/ri';

const ResourceImmigration = () => {
  return (
    <>
      <Container fluid="md" className="mt-2 ">
        <Row className="pt-2 pb-1">
          <Col>
            <h6 className="">Immigration</h6>
          </Col>
          <Col className="text-end">
            <Button className="ms-3 mt-1 l-bg-grey l-text-black l-fw-600">Edit</Button>
          </Col>
        </Row>
        <Row className="pt-3 mt-1 l-bg-grey rounded">
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Work Permit</h6>
              <h6 className="l-fs-14">H1B</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Document ID</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Start Date</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">End Date</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <Form.Group className="">
                <Form.Check
                  required
                  label="Remind me 6 months before Expiration"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  checked
                />
              </Form.Group>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container fluid="md" className="mt-2 ">
        <Row className="pt-3 mt-1 l-bg-grey rounded">
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Passport No</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Passport Issue Date</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Passport Exp Date</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Entered US First Time</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <Form.Group className="">
                <Form.Check
                  required
                  label="Remind me 6 months before Expiration"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  checked
                />
              </Form.Group>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default ResourceImmigration
