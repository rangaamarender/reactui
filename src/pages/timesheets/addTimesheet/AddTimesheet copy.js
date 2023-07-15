import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
import Timesheet from './Timesheet';
import Hours from './Hours';
import Expenses from './Expenses';

function AddTimesheet() {
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
    setCurrentStep(0)
  };

  const steps = [
    { label: "TIMESHEET" },
    { label: "HOURS" },
    { label: "EXPENSES" }
  ];

 
  return (
    <div className="multistep-form">
    <div className="multistep-form-steps col-md-3 ">
      <Steps  model={steps} activeIndex={currentStep} readOnly />
    </div>
    <div className="multistep-form-content col-md-9 p-2 " >
       {currentStep === 0 && <Timesheet  onNext={handleNext} />}
       {currentStep === 1 && <Hours  onPrevious={handlePrevious}  onNext={handleNext}/>}
       {currentStep === 2 && <Expenses  onPrevious={handlePrevious}   onSubmit={handleSubmit}/>}
     

      {/* <div className='ms-4'>
        {currentStep > 0 && (
          <Button label="Previous" className="p-button-secondary company-secondary-btn" onClick={handlePrev} />
        )}
        {currentStep < steps.length - 1 && (
          <Button label="Next" className="p-button-primary company-primary-btn" onClick={handleNext} />
        )}
        {currentStep === steps.length - 1 && (
          <Button label="Submit" className="company-primary-btn" onClick={handleSubmit} />
        )}
      </div> */}
    </div>
  </div>
  )
}

export default AddTimesheet