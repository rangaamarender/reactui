import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { RiPencilFill } from "react-icons/ri";

function ContractDetails({ eachDetail }) {
  return (
    <>
      <Container fluid="md" className="mt-2">
        <Row className="border-bottom pt-2 pb-2">
          <Col>
            <h5>Contract Details</h5>
          </Col>

          <Col className="text-end ">
            <Form className="d-inline-flex pt-1">
              <Form.Check type="switch" id="custom-switch" />
              <RiPencilFill className="ms-3 mt-1" />
            </Form>
          </Col>
        </Row>
        <Row className="mt-2">
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">WBS Code</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Title</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className="l-fs-14 l-color-grey">Description</h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <Col className="mb-3">
                <h6 className="l-fs-14 l-color-grey">Project Category</h6>
                <h6 className="l-fs-14">--</h6>
              </Col>
              <Col className="mb-3">
                <h6 className="l-fs-14 l-color-grey">Total Hours Estimated</h6>
                <h6 className="l-fs-14">--</h6>
              </Col>
              <Col className="mb-3">
                <h6 className="l-color-grey l-fs-14">Contract Start Date</h6>
                <h6 className="l-fs-14">--</h6>
              </Col>
              <Col className="mb-3">
                <h6 className="l-color-grey l-fs-14">Client</h6>
                <h6 className="l-fs-14">--</h6>
              </Col>
              <Col className="mb-3">
                <h6 className="l-color-grey l-fs-14">Address Line 2</h6>
                <h6 className="l-fs-14">--</h6>
              </Col>
            </Col>
            <Col>
              <Col className="mb-3">
                <h6 className="l-color-grey l-fs-14">Contract Type</h6>
                <h6 className="l-fs-14">--</h6>
              </Col>
              <Col className="mb-3">
                <h6 className="l-color-grey l-fs-14">Budget </h6>
                <h6 className="l-fs-14">--</h6>
              </Col>
              <Col className="mb-3">
                <h6 className="l-color-grey l-fs-14">Contract End Date</h6>
                <h6 className="l-fs-14">--</h6>
              </Col>
              <Col className="mb-3">
                <h6 className="l-color-grey l-fs-14">Address line 1</h6>
                <h6 className="l-fs-14">--</h6>
              </Col>
              <Col className="mb-3">
                <h6 className="l-color-grey l-fs-14">No. of Resources</h6>
                <h6 className="l-fs-14">Single</h6>
              </Col>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container fluid="md" className="mt-2">
        <Row className="border-bottom pt-2 pb-2">
          <Col>
            <h5>PO Rate</h5>
          </Col>
          <Col className="text-end ">
            <RiPencilFill className="ms-3 mt-1" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">PO Rate</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">PO Rate Type</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">PO Type</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Payment Terms</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Invoice Cycle</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
export default ContractDetails;
