import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
// import { Card } from 'primereact/card';
// import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import AssignDocuments from '../../resources/resourceAdd/AssignDocuments';
import { Container, Col, Row } from 'react-bootstrap';
import ResourceForm from './ResourceForm';
import SelectVendor from './SelectVendor';

const AddResource = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    const updatedObject = { ...formData, [e.target.name]: e.target.value }
    setFormData(updatedObject)
  }
  const steps = [
    { label: 'RESOURCE' },
    { label: 'VENDOR (IF C2C)' },
    { label: 'ASSIGN DOCUMENTS' }
  ];


  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // console.log('Form Data:', formData);
    // setFormData({ name: '', email: '', password: '' });
    setCurrentStep(0);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <ResourceForm />
        );
      case 1:
        return (
          <SelectVendor />
        );
      case 2:
        return (
          <AssignDocuments />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="multistep-form">
        <div className="multistep-form-steps col-md-3">
          <Steps className='stepsMainContainer' model={steps} activeIndex={currentStep} readOnly />
        </div>
        <div className="multistep-form-content col-md-9 p-2">
          {renderStepContent()}
          <div className='ms-4'>

            {currentStep > 0 && (
              <Button label="Previous" className="p-button-secondary company-secondary-btn" onClick={handlePrev} />
            )}
            {currentStep < steps.length - 1 && (
              <Button label="Next" className="p-button-primary company-primary-btn" onClick={handleNext} />
            )}
            {currentStep === steps.length - 1 && (
              <Button label="Submit" className=" company-primary-btn" onClick={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddResource;