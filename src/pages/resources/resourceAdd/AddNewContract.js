import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import ContractDetails from './ContractDetails';
import Step1 from './Step1';
import AddEndClient from './AddEndClient';
import AddClient from './AddClient';
import AddOrganisation from './AddMSA';
import WoRateDetails from './WoRateDetails';
import AddSupervisorInfo from './AddSupervisorInfo';
import AddDocument from './AddDocument';
import AddAccountManagerInfo from './AddAccountManagerInfo';
import WORateOptions from './WORateOptions';
import WorkOrder from './WorkOrder';
import AddMSA from './AddMSA';

function AddNewContract({setProgress}) {
 
  const [currentStep, setCurrentStep] = useState(null);
  const [formData, setFormData] = useState({});


  const handleNext = (step, data) => {
    console.log(step)
    setCurrentStep(step);
    setFormData({ ...formData, ...data });

    if(step === "contractDetails"){
      setProgress(15)
    }else if(step === "woRateOptions"){
      setProgress(30)
    }else if(step === "woRate"){
      setProgress(45)
    }else if(step === "supervaisor"){
      setProgress(60)
    }else if(step === "document"){
      setProgress(75)
    }else if(step === "manager"){
      setProgress(100)
    }else{
      setProgress(0)
    }
  };

  const handlePrevious = (step) => {
    setCurrentStep(step);
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    // Submit the form data
    // setCurrentStep(0)
  };

  return (

    <div className="flex row ">
      <div className='col-md-2'></div>
      <div className="col-md-8 p-2 " >
        {!currentStep   && <Step1 onNext={handleNext}  />}
        {currentStep === "contractDetails" && <ContractDetails onNext={handleNext} onPrevious={handlePrevious} />}
        {currentStep === "endClient" && <AddEndClient onNext={handleNext} onPrevious={handlePrevious} />}
        {currentStep === "addClient" && <AddClient onNext={handleNext} onPrevious={handlePrevious} />}
        {currentStep === "addMSA" && <AddMSA onNext={handleNext} onPrevious={handlePrevious} />}
        {currentStep === "woRateOptions" && <WORateOptions onNext={handleNext} onPrevious={handlePrevious} />}
        {currentStep === "woRate" && <WorkOrder onPrevious={handlePrevious} onNext={handleNext}  />}
        {currentStep === "supervaisor" && <AddSupervisorInfo onPrevious={handlePrevious} onNext={handleNext}/>}
        {currentStep === "document" && <AddDocument onPrevious={handlePrevious} onNext={handleNext}/>}
        {currentStep === "manager" && <AddAccountManagerInfo onPrevious={handlePrevious} onSubmit={handleSubmit}/>}
      </div>
      <div className='col-md-2'></div>
    </div>
  )
}

export default AddNewContract