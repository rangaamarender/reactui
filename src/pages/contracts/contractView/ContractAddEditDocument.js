import React, { useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { BsFillPlusSquareFill } from 'react-icons/bs';
import { FileUploader } from "react-drag-drop-files";
import plusIcon from '../../../assets/plusIcon.png';


function ContractAddEditDocument({addEditComponent,title}) {

    const fileTypes = ["JPEG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
     const handleChange = (file) => {
     setFile(file);
  };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div >
        {/* {addEditComponent === "add" && <Dropdown.Item onClick={handleShow}> <BsFillPlusSquareFill className='l-color-orange l-fs-18'/></Dropdown.Item>} */}
        {addEditComponent === "add" &&   <img src={plusIcon} className='pe-3' onClick={handleShow}/>}
         {addEditComponent === "edit" && <Dropdown.Item onClick={handleShow}> Edit </Dropdown.Item> }  
            <Modal show={show} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="addDocumentContainer"
            >
                <Modal.Header closeButton>
                    <Modal.Title><h6 className='l-fs-18'>{title}</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body className='mb-2'>
                <Row className="g-3 mb-2">
            <Col md>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder='LCA-Lucidtech' />
            </Col>
          </Row>
          <Row className="g-3 mb-2">
          <Col md>
              <Form.Label>Doc.Number</Form.Label>
              <Form.Control type="number"  />
            </Col>
            <Col md>
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="date"  />
            </Col>
          </Row >
          <Row className="g-3 mb-2 ms-1 me-1">
          <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
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
        </div>
    );
}

export default ContractAddEditDocument;
