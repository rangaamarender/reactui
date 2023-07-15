import React, { useState, useEffect } from 'react';
import AssignDocuments from './AssignDocuments';
import ResourceForm from './ResourceForm';
import SelectVendor from './SelectVendor';

function AddNewResource({ setProgress, setValue }) {
    const [currentStep, setCurrentStep] = useState('resourceForm');
    const [formData, setFormData] = useState({});
    const [totalSteps, setTotalSteps] = useState(3); // Number of total steps (resourceForm + assignDocuments)

    useEffect(() => {
        setProgress((100 / totalSteps) * getStepIndex(currentStep));
    }, [currentStep, totalSteps, setProgress]);

    const getStepIndex = (step) => {
        if (step === 'resourceForm') {
            setValue('resourceForm');
            return 1;
        } else if (step === 'selectVendor') {
            setValue('selectVendor');
            return 2;
        } else if (step === 'assignDocuments') {
            setValue('assignDocuments');
            return 3;
        }
        return 0;
    };

    const handleNext = (step, data) => {
        const updatedFormData = { ...formData, ...data };

        // Check if the role has changed
        if (formData.role !== updatedFormData.role) {
            // Role has changed, flush all remaining forms
            updatedFormData.selectVendor = {};
            updatedFormData.assignDocuments = {};
        }

        // Update the form data
        setFormData(updatedFormData);

        setCurrentStep(step);

        // Update setProgress and totalSteps if the role is changed to "w2Employee"
        if (updatedFormData.role === 'w2Employee') {
            setProgress(50); // Set the progress to 50%
            setTotalSteps(2); // Update totalSteps to reflect the reduced number of steps
        } else {
            setProgress((100 / totalSteps) * getStepIndex(step));
            setTotalSteps(3); // Reset totalSteps to the original value
        }
    };

    const handlePrevious = (step) => {
        if (currentStep === 'assignDocuments' && formData.role === 'w2Employee') {
            setCurrentStep('resourceForm');
        } else {
            setCurrentStep(step);
        }
    };

    const handleSubmit = () => {
        console.log('Form data:', formData);
        // Submit the form data
        // setCurrentStep('resourceForm')
    };

    const handleRoleChange = (event) => {
        const selectedRole = event.target.value;
        // Clear the remaining form data
        const updatedFormData = { role: selectedRole };
        
        // Update the form data
        setFormData(updatedFormData);
        setCurrentStep('resourceForm'); // Reset to the first step
        // Update setProgress and totalSteps immediately based on the selected role
        if (selectedRole === 'w2Employee') {
            setProgress(50); // Set the progress to 50%
            setTotalSteps(2); // Update totalSteps to reflect the reduced number of steps
        } else {
            setProgress(33.33); // Set the progress to 33.33% (for equal steps)
            setTotalSteps(3); // Reset totalSteps to the original value
        }
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 'resourceForm':
                return (
                    <ResourceForm
                        onNext={handleNext}
                        initialData={formData}
                        setValue={setValue}
                        handleRoleChange={handleRoleChange}
                    />
                );
            case 'selectVendor':
                return (
                    <SelectVendor
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        initialData={formData}
                    />
                );
            case 'assignDocuments':
                return (
                    <AssignDocuments
                        onPrevious={handlePrevious}
                        onSubmit={handleSubmit}
                        initialData={formData}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex row">
            <div className="col-md-2"></div>
            <div className="col-md-8 p-2">{renderCurrentStep()}</div>
            <div className="col-md-2"></div>
        </div>
    );
}

export default AddNewResource;
