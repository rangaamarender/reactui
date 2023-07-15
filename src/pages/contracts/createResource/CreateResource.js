import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';
import AddResourceDetails from './AddResourceDetails';
import ResourceContractID from './ResourceContractID';
import ResourcePayProfile from './ResourcePayProfile';
import ResourceDocuments from './ResourceDocuments';
import ResourceWORate from './ResourceWORate';

function CreateResource() {
  const [currentStep, setCurrentStep] = useState(0);

    const steps = [
    { label: "RESOURCE" },
    { label: "CONTRACT ID" },
    { label: "WO RATE (BILL RATE)" },
    { label: "PAY PROFILE (PAY RATE)" },
    { label: "DOCUMENTS" },
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setCurrentStep(0);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <AddResourceDetails/>
        );
      case 1:
        return (
          <ResourceContractID/>
        );
      case 2:
        return (
          <ResourcePayProfile/>
        );
      case 3:
        return (
          <ResourceWORate/>
        );
      case 4:
        return (
          <ResourceDocuments/>
        );
      default:
        return null;
    }
  };
  return (
    <div className="multistep-form">
    <div className="multistep-form-steps col-md-3">
      <Steps  model={steps} activeIndex={currentStep} readOnly />
    </div>
    <div className="multistep-form-content col-md-9 p-2">
      {renderStepContent()}
      <div className='ms-4'>
        {currentStep > 0 && (
          <Button label="Previous" className="p-button-secondary" onClick={handlePrev} />
        )}
        {currentStep < steps.length - 1 && (
          <Button label="Next" className="p-button-primary" onClick={handleNext} />
        )}
        {currentStep === steps.length - 1 && (
          <Button label="Submit" className=" l-bg-orange" onClick={handleSubmit} />
        )}
      </div>
    </div>
  </div>
  )
}

export default CreateResource
