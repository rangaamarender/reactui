import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';
import CompanyProfile from '../../../components/reusable/addCompany/CompanyProfile';
import ContactDetails from '../../resources/addVendor/ContactDetails';
import Address from '../../../components/reusable/addCompany/Address';
import AddCompaniesDocuments from './AddCompaniesDocuments';

function AddCompanies() {
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
        console.log('Forms data:', formData);
        // Submit the form data
        setCurrentStep(0)
    };

    const steps = [
        { label: "COMPANY PROFILE" },
        { label: "CONTACT DETAILS" },
        { label: "ADDRESS" },
        { label: "DOCUMENTS" },
    ];

    return (
        <div className="multistep-form">
            <div className="multistep-form-steps col-md-3 ">
                <Steps model={steps} activeIndex={currentStep} readOnly />
            </div>
            <div className="multistep-form-content col-md-9 p-2 " >
                {currentStep === 0 && <CompanyProfile onNext={handleNext} />}
                {currentStep === 1 && <ContactDetails onPrevious={handlePrevious} onNext={handleNext} />}
                {currentStep === 2 && <Address onPrevious={handlePrevious} onNext={handleNext} />}
                {currentStep === 3 && <AddCompaniesDocuments onPrevious={handlePrevious} onSubmit={handleSubmit} />}
            </div>
        </div>
    )
}

export default AddCompanies