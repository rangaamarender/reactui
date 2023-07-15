import React, { useState, useEffect } from 'react';
import CompanyProfile from './CompanyProfile';
import Address from './Address';
import ContactDetails from './ContactDetails';
import AddUser from './AddUser';
import AddCompanyDocument from './AddCompanyDocument';

function AddCompany({ addCompanyStepsView, setVisible, setProgress, setValue }) {
  const [currentStep, setCurrentStep] = useState("companyProfile");
  const [formData, setFormData] = useState({});
  const [totalSteps, setTotalSteps] = useState(5); // Number of total steps (resourceForm + assignDocuments)

  useEffect(() => {
    setProgress((100 / totalSteps) * getStepIndex(currentStep));
  }, [currentStep, totalSteps, setProgress]);

  const getStepIndex = (step) => {
    if (step === "companyProfile") {
      setValue("companyProfile")
      return 1;
    } else if (step === "contactDetails") {
      setValue("contactDetails")
      return 2;
    } else if (step === "address") {
      setValue("address")
      return 3;
    } else if (step === "addCompanyDocument") {
      setValue("addCompanyDocument")
      return 4;
    } else if (step === "addUser") {
      setValue("addUser")
      return 5;
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
    setCurrentStep(0)
    const path = localStorage.getItem("selectedPath")
    if (path === "/companies") {
      window.location.reload();
    } else if (path === "/contracts") {
      setVisible(false)
    } else if (path === "/resources") {
      setVisible(false)
    }
  };

  return (
    <div className="flex row ">
      <div className='col-md-2'></div>
      <div className="col-md-8 p-2 " >
        {currentStep === "companyProfile" && <CompanyProfile onNext={handleNext} />}
        {currentStep === "contactDetails" && <ContactDetails onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === "address" && <Address onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === "addCompanyDocument" && <AddCompanyDocument onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === "addUser" && <AddUser onPrevious={handlePrevious} onSubmit={handleSubmit} />}
      </div>
      <div className='col-md-2'></div>
    </div>
  )
}

export default AddCompany