import { Offcanvas, Button, Dropdown, Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
// import PromotionsAdd from './PromotionsAdd';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import TimeSheetViewDetails from './TimeSheetViewDetails';
import axios from 'axios';
import EmployeeSplitButton from '../../components/reusable/EmployeeSplitButton';
import EmployeeTimesheetHeader from '../../components/reusable/EmployeeTimesheetHeader';
import EmployeeHeader from '../../components/reusable/EmployeeHeader';
import EmployeeTimesheetSplitButton from '../../components/reusable/EmployeeTimesheetSplitButton';

function TimeSheetCanvas({ componentToBeRendered, eachDetail, title }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [empHeader, setEmpHeader] = useState([]);
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

      {/* { componentToBeRendered === "add" && <BsFillPlusSquareFill onClick={handleShow} />} */}
      {/* { componentToBeRendered === "edit" && <Dropdown.Item  onClick={handleShow}>Edit</Dropdown.Item>}
           { componentToBeRendered === "view" && <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>} */}

      <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>

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
                <EmployeeTimesheetSplitButton />
              </Col>
            </Row>
          </Container>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* { componentToBeRendered === "add" && <PromotionsAdd  />} */}
          {/* { componentToBeRendered === "edit" && <ContractEdit/>}
           { componentToBeRendered === "view" && <ContractViewTabs eachDetail={eachDetail} />} */}
          <TimeSheetViewDetails eachDetail={eachDetail} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default TimeSheetCanvas;
