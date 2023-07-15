import React, { useState, useContext } from "react";
import { Button, Container, Form, Row, Col, Modal } from "react-bootstrap";
import AddResourceDetails from "./AddResourceDetails";
import ResourceContractID from "./ResourceContractID";
import ResourceWORate from "./ResourceWORate";
import ResourcePayProfile from "./ResourcePayProfile";
import ResourceDocuments from "./ResourceDocuments";
import ResourceAddSteps from "./ResourceAddSteps";
import AddSteps from "../contractAdd/AddSteps";
import { ContractContext, ResourceContext } from "../contractAdd/ContractContext";
import { Link } from "react-router-dom";


const CreateResource = () => {
  const { ResourceCurrentStep, updateResourceCurrentStepState } = useContext(ResourceContext);
  const { contractCurrentStep, updateCurrentStepState } = useContext(ContractContext);


  const handleNext = () => {
    updateResourceCurrentStepState(ResourceCurrentStep + 1);
  };

  const handlePrevious = () => {
    updateResourceCurrentStepState(ResourceCurrentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCurrentStepState(6);
  };

  const steps = [
    { title: "RESOURCE" },
    { title: "CONTRACT ID" },
    { title: "WO RATE (BILL RATE)" },
    { title: "PAY PROFILE (PAY RATE)" },
    { title: "DOCUMENTS" },
  ];

  return (
    <>
      <Container fluid >
       
        <Row >
        <Col md={3} style={{ backgroundColor: "white", height: "90vh" }}>
            <AddSteps steps={steps} componentToBeRendered={"resource"} />
          </Col>

          <Col md={9}>
            <Container fluid className="mt-2">
              <Form onSubmit={handleSubmit}>
                {ResourceCurrentStep === 0 && <AddResourceDetails/>}
                {ResourceCurrentStep === 1 && <ResourceContractID/>}
                {ResourceCurrentStep === 2 && <ResourceWORate/>}
                {ResourceCurrentStep === 3 && <ResourcePayProfile/>}
                {ResourceCurrentStep === 4 && <ResourceDocuments/>}

                <div className="text-center mt-4" style={{position:"fixed", bottom:"50px"}}>
                  {ResourceCurrentStep > 0 && (
                    <Button variant="secondary" onClick={handlePrevious}>
                      Previous
                    </Button>
                  )}
                  {ResourceCurrentStep < steps.length - 1 && (
                    <Button variant="primary" onClick={handleNext}>
                      Next
                    </Button>
                  )}
                  {ResourceCurrentStep === steps.length - 1 && (
                   <Link to="/addContract">
                    <Button variant="success" type="submit" >
                      Submit
                    </Button>
                   </Link> 
                  )}
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default CreateResource;
