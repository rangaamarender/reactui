import React, { useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FileUploader } from "react-drag-drop-files";

function ResourceAddTimesheet(props) {

    const fileTypes = ["JPEG", "PDF", "PNG", "GIF", "DOC"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Dropdown.Item onClick={handleShow}>Add Timesheet</Dropdown.Item>
            <Modal show={show} onHide={handleClose}
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Timesheet</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mb-2'>
                    <Row className="g-3 mb-2">
                        <Col md={4}>
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" required />
                        </Col>
                        <Col md={4}>
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" required />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Hours</Form.Label>
                            <Form.Control type="text" required placeholder='--' />
                        </Col>
                    </Row>
                    <Row className=" mt-4  ms-1 me-1">
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <FileUploader
                                multiple={true}
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                            />
                            <p className='pt-3'>{file ? `File name: ${file[0].name}` : "No files uploaded yet"}</p>
                        </Form.Group>
                    </Row>
                    {/* <Row>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Upload Documents</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                    </Row> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='l-bg-orange' variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ResourceAddTimesheet;