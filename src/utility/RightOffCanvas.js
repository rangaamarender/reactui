import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';

function RightOffCanvas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Offcanvas content goes here.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RightOffCanvas;