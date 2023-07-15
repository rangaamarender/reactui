import React, { useState, useContext } from "react";
import { Button, Container, Form, Row, Col, Modal } from "react-bootstrap";
import ContractDetails from "./ContractDetails";
import ClientDetails from "./ClientDetails";
import WoRateDetails from "./WoRateDetails";
import AddSteps from "./AddSteps";
import { ContractContext } from "./ContractContext";
import ResourceDetails from "./ResourceDetails";
import AddPayProfile from "./AddPayProfile";
import AddSupervisorInfo from "./AddSupervisorInfo";
import AddDocument from "./AddDocument";
import AddAccountManagerInfo from "./AddAccountManagerInfo";
import GatekeeperDetails from "./GatekeeperDetails";
import AddSidebarSteps from "../../../utility/AddSidebarSteps";



const AddContract = () => {
  const { currentStep, updateCurrentStepState } = useContext(ContractContext);

  const handleNext = () => {
    updateCurrentStepState(currentStep + 1);
  };

  const handlePrevious = () => {
    updateCurrentStepState(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCurrentStepState(0);
  };

  const steps = [
    { label: "CONTRACT" },
    { label: "CLIENT" },
    { label: "GATEKEEPER" },
    { label: "BILL RATE" },
    { label: "RESOURCE" },
    { label: "PAY PROFILE" },
    { label: "SUPERVISOR INFO" },
    { label: "DOCUMENTS" },
    { label: "ACCOUNT MANAGER INFO" },
  ];

  return (
    <>
      <Container fluid >
        <Row >
          <Col md={3} style={{ backgroundColor: "white", height: "90vh" }}>
            {/* <AddSteps steps={steps} componentToBeRendered={"contract"} /> */}
            <AddSidebarSteps steps={steps}  componentToBeRendered={"contract"}  />
          </Col>

          <Col md={9}>
            <Container fluid className="mt-2">
              <Form onSubmit={handleSubmit}>
                {currentStep === 0 && <ContractDetails />}
                {currentStep === 1 && <ClientDetails />}
                {currentStep === 2 && <GatekeeperDetails/>}
                {currentStep === 3 && <WoRateDetails />}
                {currentStep === 4 && <ResourceDetails />}
                {currentStep === 5 && <AddPayProfile />}
                {currentStep === 6 && <AddSupervisorInfo />}
                {currentStep === 7 && <AddDocument />}
                {currentStep === 8 && <AddAccountManagerInfo />}

                <div className="text-center mt-4" style={{position:"fixed", bottom:"50px"}}>
                  {currentStep > 0 && (
                    <Button variant="secondary" onClick={handlePrevious}>
                      Previous
                    </Button>
                  )}
                  {currentStep < steps.length - 1 && (
                    <Button variant="primary" onClick={handleNext}>
                      Next
                    </Button>
                  )}
                  {currentStep === steps.length - 1 && (
                    <Button variant="success" type="submit">
                      Submit
                    </Button>
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

export default AddContract;
