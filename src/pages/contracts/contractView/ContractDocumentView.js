import React, { useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





function ContractDocumentView(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div >
            <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
            <Modal show={show} onHide={handleClose}
                {...props}
                
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="addDocumentContainer"
            >
                <Modal.Header closeButton>
                    <Modal.Title><h5>View Document</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body className='mb-2'>
              <Row>
              <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Title</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Resource ID</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
              </Row>
              <Row>
              <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">DOC.Number</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Updated By</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
              </Row>

             
                <h5>Documents</h5>
                <Button  variant="light"><span className=''>+</span> Add</Button>
              
         

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='l-bg-orange' variant="primary" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal >
        </div>
    );
}

export default ContractDocumentView;
