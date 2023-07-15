import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
// import { Card } from 'primereact/card';
// import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import AddVendor from './AddVendor';
import AssignDocuments from './AssignDocuments';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ResourceForm from './ResourceForm';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  middleName: Yup.string().required('Middle Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  primaryEmail: Yup.string().required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  startDate: Yup.date().required('Please enter valid Date'),
  endDate: Yup.date()
    .required('End Date is required')
    .min(
      Yup.ref('startDate'),
      'End Date must be greater than or equal to Start Date'
    ),
});

const Steps3 = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'RESOURCE' },
    { label: 'VENDOR (IF C2C)' },
    { label: 'ASSIGN DOCUMENTS' }
  ];

  const [resourceObject, setResourceObject] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    primaryEmail: "",
    phoneNumber: "",
    startDate: "",
    role: ""
  })


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
          <AddVendor />
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
    <div className="multistep-form">
      <div className="multistep-form-steps col-md-3">
        <Steps model={steps} activeIndex={currentStep} readOnly />
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
  );
};

export default Steps3;
