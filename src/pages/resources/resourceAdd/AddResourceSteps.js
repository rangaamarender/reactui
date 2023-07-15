import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
import ResourceForm from './ResourceForm';
import AssignDocuments from './AssignDocuments';
import SelectVendor from './SelectVendor';

const steps = [
    { label: 'RESOURCE' },
    { label: 'VENDOR (IF C2C)' },
    { label: 'ASSIGN DOCUMENTS' },
];

const AddResourceSteps = () => {
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
        setCurrentStep(0);
    };

    return (
        <>
            <div className="p-d-flex p-jc-center">
                <div className="p-mt-5 p-p-5 p-shadow-5">
                    <div className='row'>
                        <div className='col-md-3'>
                            {/* <h1>Headding</h1> */}
                            <Steps model={steps} activeIndex={currentStep} />
                        </div>
                        <div className='col-md-9'>
                            <div>
                                {currentStep === 0 && <ResourceForm onNext={handleNext} />}
                                {currentStep === 1 && <SelectVendor onNext={handleNext} onPrevious={handlePrevious} />}
                                {currentStep === 2 && <AssignDocuments onSubmit={handleSubmit} onPrevious={handlePrevious} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AddResourceSteps;
