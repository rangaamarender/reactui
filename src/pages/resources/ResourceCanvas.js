import { Offcanvas, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BsFillPlusSquareFill } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import ResourceEdit from './ResourceEdit';
// import ResourceView from './ResourceView';
import ResourceViewTabs from './resourceView/ResourceViewTabs';
import user1 from '../../assets/user1.png';
import CompanyHeader from '../../components/reusable/CompanyHeader';
import axios from 'axios';
import { Button } from 'primereact/button';
import EmployeeHeader from '../../components/reusable/EmployeeHeader';
import MultiButtons from '../../components/reusable/MultiButtons';
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import MySplitButton from './resourceAdd/MySplitButton';
import EmployeeSplitButton from '../../components/reusable/EmployeeSplitButton';

function ResourceCanvas({ componentToBeRendered, eachDetail, title }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [empHeader, setEmpHeader] = useState([]);

  const save = () => {
    console.log('Save clicked');
  };

  useEffect(() => {
    var employeeHeader = axios.get("http://localhost:4000/employeeHeader")
      .then(response => {
        setEmpHeader(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <>
      {componentToBeRendered === "edit" && <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>}
      {componentToBeRendered === "view" && <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>}
      {componentToBeRendered === "status" && <Dropdown.Item onClick={handleShow}>Status</Dropdown.Item>}
      {componentToBeRendered === "changeDate" && <Dropdown.Item onClick={handleShow}>Change Date</Dropdown.Item>}
      {componentToBeRendered === "addTimesheet" && <Dropdown.Item onClick={handleShow}>Add Timesheet</Dropdown.Item>}
      {componentToBeRendered === "addDocument" && <Dropdown.Item onClick={handleShow}>Add Document</Dropdown.Item>}
      {componentToBeRendered === "addNote" && <Dropdown.Item onClick={handleShow}>Add Note</Dropdown.Item>}

      <Offcanvas show={show} onHide={handleClose} placement="end" className='l-width-80'>
        <Offcanvas.Header closeButton className='d-inline-table company-layout-bg pe-4'>
          <Container fluid>
            <Row>
              <Col md={8} lg={8} xs={12}>
                <>
                  {
                    empHeader.map((item) => (
                      <EmployeeHeader empImage={item.empImage} empName={item.empName} empType={item.empType} status={item.status} />
                    ))
                  }
                </>
              </Col>
              <Col md={4} lg={4} xs={12} className='text-end pe-3'>
                <EmployeeSplitButton />
              </Col>
            </Row>
          </Container>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {componentToBeRendered === "edit" && <ResourceEdit />}
          {componentToBeRendered === "view" && <ResourceViewTabs eachDetail={eachDetail} />}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default ResourceCanvas;
