import React, { useState, useEffect } from 'react';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';
import ContractDetails from './ContractDetails';
import ClientDetails from './ClientDetails';
import GatekeeperDetails from './GatekeeperDetails';
import WoRateDetails from './WoRateDetails';
import ResourceDetails from './ResourceDetails';
import AddPayProfile from './AddPayProfile';
import AddSupervisorInfo from './AddSupervisorInfo';
import AddDocument from './AddDocument';
import AddAccountManagerInfo from './AddAccountManagerInfo';
import ValidationTest from './ValidationTest';
import RadioButtonValidation from './RadioButtonValidation';
import ContractDetails1 from './ContractDetails1';
import CalenderValidation from './CalenderValidation';
import CalenderValidation1 from './CalenderValidation1';
import CalenderValidation2 from './CalenderValidations2';
import MaskedString from './CalenderValidation1';
import CalenderValidation3 from './CalenderValidations3';
import CalenderValidations4 from './CalenderValidations4';
import ContractType from './ContractType';

function AddContract() {
  const steps = [
    
    { label: "CONTRACT TYPE" },
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

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (step, data) => {
    setCurrentStep(step + 1);
    setFormData({ ...formData, ...data });
  };

  const handlePrevious = (step) => {
    setCurrentStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    // Submit the form data
    // setCurrentStep(0)
  };

  return (

    <div className="multistep-form">
      <div className="multistep-form-steps col-md-3 ">
        <Steps model={steps} activeIndex={currentStep} />
      </div>
      <div className="multistep-form-content col-md-9 p-2 " >

        {currentStep === 0 && <ContractType onNext={handleNext}  />}
        {/* {currentStep === 1 && <ContractDetails onNext={handleNext}  />} */}
        {currentStep === 1 && <ContractDetails1 onNext={handleNext} />}
        {/* {currentStep === 1 && <CalenderValidation1 onNext={handleNext} />} */}
        {/* {currentStep === 1 &&  <CalenderValidation onNext={handleNext} />} */}
        {/* {currentStep === 1 && <CalenderValidation2 onNext={handleNext} />} */}
        {/* {currentStep === 1 && <CalenderValidation3 onNext={handleNext} />} */}
        {/* {currentStep === 1 && <CalenderValidations4 onNext={handleNext} />} */}

       

        {currentStep === 2 && <ClientDetails onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === 3 && <GatekeeperDetails onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === 4 && <WoRateDetails onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === 5 && <ResourceDetails onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === 6 && <AddPayProfile onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === 7 && <AddSupervisorInfo onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === 8 && <AddDocument addDocument="addContractDocument" onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === 9 && <AddAccountManagerInfo onPrevious={handlePrevious} onSubmit={handleSubmit} />}
      </div>
      {/* <div className="multistep-form-actions">
        {currentStep > 0 && (
          <Button label="Previous" onClick={() => setCurrentStep(currentStep - 1)} />
        )}
        {currentStep < steps.length - 1 && (
          <Button label="Next" onClick={() => setCurrentStep(currentStep + 1)} />
        )}
        {currentStep === steps.length - 1 && (
          <Button label="Submit" onClick={handleSubmit} />
        )}
      </div> */}
    </div>
  )
}

export default AddContract