import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { RiPencilFill } from 'react-icons/ri';

function ResourceView({ eachDetail }) {
  return (
    <>
      <Container fluid="md" className="mt-2 ">
        <Row className="border-bottom pt-2 pb-1">
          <Col>
            <h6 className="l-fs-18">Employee Profile</h6>
          </Col>
          <Col className="text-end">
            <Form className="d-inline-flex pt-1">
              <Form.Check
                type="switch"
                id="custom-switch"
              // label="Check this switch"
              />
              <RiPencilFill className="ms-3 mt-1" />
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">First Name</h6>
              <h6 className="l-fs-14 text-break">Rajesh</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Last Name</h6>
              <h6 className="l-fs-14 text-break">-</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Display Name</h6>
              <h6 className="l-fs-14 text-break">--</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Primary Email Id</h6>
              <h6 className="l-fs-14 text-break">---</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">DOB</h6>
              <h6 className="l-fs-14">---</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">SSN</h6>
              <h6 className="l-fs-14">##</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">DL Number</h6>
              <h6 className="l-fs-14">C2C Employee</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">License-exp</h6>
              <h6 className="l-fs-14">12/10/2021</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Start Date</h6>
              <h6 className="l-fs-14">---</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Gender</h6>
              <h6 className="l-fs-14">Male</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Marital Status</h6>
              <h6 className="l-fs-14">Married</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Employee type</h6>
              <h6 className="l-fs-14">---</h6>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Current Status</h6>
              <h6 className="l-fs-14">Active</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Invoice Cycle</h6>
              <h6 className="l-fs-14">---</h6>
            </Col>
            <Col className="mb-3">
            </Col>
          </Row>
        </Row>
      </Container>
      <Container fluid="md" className="mt-2 ">
        <Row className="border-bottom pt-2 pb-1">
          <Col>
            <h5 className="">Contact Details</h5>
          </Col>
          <Col className="text-end">
            <RiPencilFill className="ms-3 mt-1" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Phone</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Email</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container fluid="md" className="mt-2">
        <Row className="border-bottom pt-2 pb-1">
          <Col>
            <h5 className="">Adderess</h5>
          </Col>
          <Col className="text-end">
            <RiPencilFill className="ms-3 mt-1" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Row>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Address 1</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Address 2</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
        </Row>
      </Container>

    </>
  );
}
export default ResourceView;
