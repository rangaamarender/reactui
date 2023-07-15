import React, { useState, useContext } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { ResourceAddVendorContext } from './ResourceAddVendorContext'
import CompanyProfile from "./CompanyProfile";
// import VendorAddSteps from "./VendorAddSteps";
import ContactDetails from "./ContactDetails";

const ResourceAddVendor = () => {
  const { currentStep, updateCurrentStepState } = useContext(ResourceAddVendorContext);

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
    { title: "COMPANY PROFILE" },
    { title: "CONTACT DETAIL" },
    { title: "ADDRESS" },
    { title: "DOCUMENTS" },
    { title: "ADD USERS" },
  ];

  return (
    <>
      <Container fluid >
        <Row >
          <Col md={3} style={{ backgroundColor: "white", height: "90vh" }}>
            {/* <VendorAddSteps stepValue={currentStep} /> */}
          </Col>

          <Col md={9}>
            <Container fluid className="mt-2">
              <Form onSubmit={handleSubmit}>
                {currentStep === 0 && <CompanyProfile />}
                {currentStep === 1 && <ContactDetails />}
                {currentStep === 2 && <CompanyProfile />}
                {currentStep === 3 && <CompanyProfile />}
                {currentStep === 4 && <CompanyProfile />}
                {currentStep === 5 && <CompanyProfile />}

                <footer className="">
                  <div className="text-center mt-4">
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
                </footer>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default ResourceAddVendor;
