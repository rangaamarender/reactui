import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import ContractDetails from './ContractDetails';
import Step1 from './Step1';
import AddEndClient from './AddEndClient';
import AddClient from './AddClient';
import AddSupervisorInfo from './AddSupervisorInfo';
import AddDocument from './AddDocument';
import AddAccountManagerInfo from './AddAccountManagerInfo';
import WORateOptions from './WORateOptions';
import WorkOrder from './WorkOrder';
import AddMSA from './AddMSA';

function AddNewContract({ setProgress, setValue }) {

  const [currentStep, setCurrentStep] = useState("step1");
  const [formData, setFormData] = useState({});



  // const handleNext = (step, data) => {
  //   console.log(step)
  //   setCurrentStep(step);
  //   setFormData({ ...formData, ...data });

  //   // if(value === existing){handleExistingFlow(step)}
  //   // else{
  //   //   handleNonExistingFlow(step)
  //   // }

  //   if(step === "contractDetails"){
  //     setProgress(20)
  //     setValue("endClient")
  //   }
  //   else if (step === "endClient") {
  //     setProgress(25);
  //     setValue("addClient")

  //   } else if (step === "addClient") {
  //     setProgress(30);
  //     setValue("addMSA")
  //   } else if (step === "addMSA") {
  //     setProgress(35);
  //     setValue("woRateOptions")
  //   }
  //   else if(step === "woRateOptions" ){
  //     setProgress(40);
  //     setValue("woRate")
  //   }else if(step === "woRate"){
  //     setProgress(55);
  //     setValue("supervaisor");
  //   }else if(step === "supervaisor"){
  //     setProgress(70);
  //     setValue("document");
  //   }else if(step === "document"){
  //     setProgress(85);
  //     setValue("manager");
  //   }else if(step === "manager"){
  //     setProgress(100);

  //   }
  // };


  const handleNext = (step, data) => {
    // console.log(step);
    setCurrentStep(step);
    setFormData({ ...formData, ...data });

    const stepMap = {
      contractDetails: { nextStep: "endClient", progress: 20 },
      endClient: { nextStep: "addClient", progress: 25 },
      addClient: { nextStep: "addMSA", progress: 30 },
      addMSA: { nextStep: "woRateOptions", progress: 35 },
      woRateOptions: { nextStep: "woRate", progress: 40 },
      woRate: { nextStep: "supervaisor", progress: 55 },
      supervaisor: { nextStep: "document", progress: 70 },
      document: { nextStep: "manager", progress: 85 },
      manager: { nextStep: "document", progress: 100 },
    };

    const { nextStep, progress } = stepMap[step] || {};

    if (nextStep) {
      setProgress(progress);
      setValue(nextStep);
    }
  };

  const handlePrevious = (step) => {
    setCurrentStep(step);

    const stepMap = {
      contractDetails: { previousStep: "endClient", progress: 20 },
      endClient: { previousStep: "addClient", progress: 25 },
      addClient: { previousStep: "addMSA", progress: 30 },
      addMSA: { previousStep: "woRateOptions", progress: 35 },
      woRateOptions: { previousStep: "woRate", progress: 40 },
      woRate: { previousStep: "supervaisor", progress: 55 },
      supervaisor: { previousStep: "document", progress: 70 },
      document: { previousStep: "manager", progress: 85 },
      manager: { previousStep: "document", progress: 100 },
    };

    const { previousStep, progress } = stepMap[step] || {};

    if (previousStep) {
      setProgress(progress);
      setValue(previousStep);
    } else {
      setProgress(progress);
      setValue(step);
    }
  };

  // const handlePrevious = (step) => {
  //   setCurrentStep(step);

  //   if (step === "contractDetails") {
  //     setProgress(20);
  //   } 
  //   else if (step === "endClient") {
  //     setProgress(25);
  //   } else if (step === "addClient") {
  //     setProgress(30);
  //   } else if (step === "addMSA") {
  //     setProgress(35);
  //   }
  //    else if (step === "woRateOptions") {
  //     setProgress(40);
  //   } else if (step === "woRate") {
  //     setProgress(55);
  //   } else if (step === "supervaisor") {
  //     setProgress(70);
  //   } else if (step === "document") {
  //     setProgress(85);
  //   } else if (step === "manager") {
  //     setProgress(100);
  //   }

  // };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    // Submit the form data
    // setCurrentStep(0)
  };

  return (

    <div className="flex row ">
      <div className='col-md-2'></div>
      <div className="col-md-8 p-2 " >
        {currentStep === "step1" && <Step1 onNext={handleNext} setValue={setValue} />}
        {currentStep === "contractDetails" && <ContractDetails onNext={handleNext} onPrevious={handlePrevious} setProgress={setProgress} />}
        {currentStep === "endClient" && <AddEndClient onNext={handleNext} onPrevious={handlePrevious} setValue={setValue} currentStep={currentStep} />}
        {currentStep === "addClient" && <AddClient onNext={handleNext} onPrevious={handlePrevious} />}
        {currentStep === "addMSA" && <AddMSA onNext={handleNext} onPrevious={handlePrevious} />}
        {currentStep === "woRateOptions" && <WORateOptions onNext={handleNext} onPrevious={handlePrevious} setProgress={setProgress} />}
        {currentStep === "woRate" && <WorkOrder onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === "supervaisor" && <AddSupervisorInfo onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === "document" && <AddDocument onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === "manager" && <AddAccountManagerInfo onPrevious={handlePrevious} onSubmit={handleSubmit} />}
      </div>
      <div className='col-md-2'></div>
    </div>
  )
}

export default AddNewContract