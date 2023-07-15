import React, { createContext, useState } from 'react';

export const ResourceAddVendorContext = createContext();

export const ResourceAddVendorProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const updateCurrentStepState = (newState) => {
        setCurrentStep(newState);
    }

    return (
        <ResourceAddVendorContext.Provider value={{ currentStep, updateCurrentStepState }}>
            {children}
        </ResourceAddVendorContext.Provider>
    )
}

