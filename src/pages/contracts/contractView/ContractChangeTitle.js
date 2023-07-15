import React, { useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ContractChangeTitle() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Dropdown.Item onClick={handleShow}>Change Title</Dropdown.Item>
            <Modal show={show} onHide={handleClose}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title><h6 className='l-fs-18'>Change Title</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body className='mb-2'>
                <Row className='g-2'>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder='--'  />
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

export default ContractChangeTitle;