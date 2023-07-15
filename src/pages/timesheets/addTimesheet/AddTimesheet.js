import React, { useState,useEffect } from 'react';
import { Steps } from 'primereact/steps';
import Timesheet from './Timesheet';
import Hours from './Hours';
import Expenses from './Expenses';

function AddTimesheet({setProgress,setValue}) {
  const [currentStep, setCurrentStep] = useState("timesheet");
  const [formData, setFormData] = useState({});


  const [totalSteps, setTotalSteps] = useState(3); 

  useEffect(() => {
      setProgress((100 / totalSteps) * getStepIndex(currentStep));
  }, [currentStep, totalSteps, setProgress]);

  const getStepIndex = (step) => {
      if (step === "timesheet") {
          setValue("timesheet")
          return 1;
      } else if (step === "hours") {
          setValue("hours")
          return 2;
      } else if (step === "expenses") {
          setValue("expenses")
          return 3;
      }
      return 0;
  };


  const handleNext = (step, data) => {
    setCurrentStep(step);
    setFormData({ ...formData, ...data });
  };

  const handlePrevious = (step) => {
    setCurrentStep(step);
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    // Submit the form data
    setCurrentStep("timesheet")
  };
 
  return (
    <div className="flex row ">
    <div className='col-md-2'></div>
    <div className="col-md-8 p-2 " >
       {currentStep === "timesheet" && <Timesheet  onNext={handleNext} />}
       {currentStep === "hours" && <Hours  onPrevious={handlePrevious}  onNext={handleNext}/>}
       {currentStep === "expenses" && <Expenses  onPrevious={handlePrevious}   onSubmit={handleSubmit}/>}
    </div>
  </div>
  )
}

export default AddTimesheet