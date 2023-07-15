import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import wifiIcon from "../../assets/wifiIcon.svg";

function ContractAudit(props) {
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
      <Dropdown.Item onClick={handleShow}>Add Invoice</Dropdown.Item>
      {/* <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title><h6 className='l-fs-18'>Change Status</h6></Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-5">
          {changeStatus && (
            <div className="l-text-center">
              <img src={wifiIcon} />
              <p>Are you want to change the status</p>
            </div>
          )}
          {!changeStatus && (
            <Form className="mb-5">
              <Form.Select aria-label="Default select example">
                <option>Active</option>
                <option value="1">Inactive</option>
                <option value="2">Expiring</option>
              </Form.Select>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {changeStatus && <>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className='l-bg-orange' variant="primary" onClick={onHandleUpdate}>
              Change
            </Button>
          </>
          }
          {!changeStatus && <>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className='l-bg-orange' variant="primary" onClick={onHandleUpdate}>
              Update
            </Button>
          </>
          }
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default ContractAudit;
