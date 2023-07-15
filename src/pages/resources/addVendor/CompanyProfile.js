import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

function CompanyProfile() {
  return (
    <>
      <Container fluid className='p-4'>
        <h5>Company Profile</h5>
        <Row className="g-2 mt-2">
          <Col>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">--</option>
                <option value="2">C2C Employee</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-2">
          <Col>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text"
              placeholder='--' />
          </Col>
          <Col>
            <Form.Label>Fax</Form.Label>
            <Form.Control type="text"
              placeholder='--' />
          </Col>
        </Row>
        <Row className="g-2 mt-2">
          <Col>
            <Form.Label>Web Address</Form.Label>
            <Form.Control type="text"
              placeholder='www.lucidtechinc.com' />
          </Col>
        </Row>

        <Row className="g-2 mt-2">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Tax Classification</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">--</option>
                <option value="2">C2C Employee</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Label>State if Incorporation</Form.Label>
            <Form.Control type="text"
              placeholder='-' />
          </Col>
          <Col md={3}>
            <Form.Label>EIN</Form.Label>
            <Form.Control type="text"
              placeholder='-' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CompanyProfile;
