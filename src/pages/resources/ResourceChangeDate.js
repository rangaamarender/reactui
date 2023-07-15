import React, { useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ResourceChangeDate(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Dropdown.Item onClick={handleShow}>Change Date</Dropdown.Item>
            <Modal show={show} onHide={handleClose}
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Change Date</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mb-2'>
                    <Row className="g-3 mb-2">
                        <Col md={6}>
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" required />
                        </Col>
                        <Col md={6}>
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" required />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='l-bg-orange' variant="primary" onClick={handleClose}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ResourceChangeDate;