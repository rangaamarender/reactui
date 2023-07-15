import { Offcanvas, Button, Dropdown, Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
// import PromotionsAdd from './PromotionsAdd';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BsFillPlusSquareFill } from "react-icons/bs";
import ContractEdit from './ContractEdit';
import ContractView from './contractView/ContractDetails';
import ContractViewTabs from './contractView/ContractViewTabs';
import CompanyHeader from '../../components/reusable/CompanyHeader';
import SplitButtonComponent from '../../components/reusable/EmployeeSplitButton';
import { useEffect } from 'react';
import axios from 'axios';
import CompanySplitButton from '../../components/reusable/CompanySplitButton';


function ContractCanvas({ componentToBeRendered, eachDetail, title }) {
  const [show, setShow] = useState(false);
  const [companyHeader, setCompanyHeader] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    var companyHeader = axios.get("http://localhost:4000/companyHeader")
      .then(response => {
        setCompanyHeader(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <>
      {/* { componentToBeRendered === "add" && <BsFillPlusSquareFill onClick={handleShow} />} */}
      {componentToBeRendered === "edit" && <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>}
      {componentToBeRendered === "view" && <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>}

      <Offcanvas show={show} onHide={handleClose} placement="end" className='l-width-80'>
        <Offcanvas.Header closeButton className='company-layout-bg'>
          <Container fluid>
            <Row>
              <Col md={8} lg={8} xs={12}>
                <>
                  {
                    companyHeader.map((item) => (
                      <CompanyHeader companyImage={item.companyImage}
                        companyTitle={item.companyTitle}
                        contractCategory={item.contractCategory}
                        contractID={item.contractID}
                        status={item.status} />
                    ))
                  }
                </>
              </Col>
              <Col md={4} lg={4} xs={12} className='text-end pe-3'>
                <CompanySplitButton />
              </Col>
            </Row>
          </Container>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* { componentToBeRendered === "add" && <PromotionsAdd  />} */}
          {componentToBeRendered === "edit" && <ContractEdit />}
          {componentToBeRendered === "view" && <ContractViewTabs eachDetail={eachDetail} />}

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default ContractCanvas;
