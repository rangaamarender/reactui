import React, { createContext, useState } from 'react';

export const AddResourceContext = createContext();

export const AddResourceProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const updateCurrentStepState = (newState) => {
        setCurrentStep(newState);
    }
    return (
        <AddResourceContext.Provider value={{ currentStep, updateCurrentStepState }}>
            {children}
        </AddResourceContext.Provider>
    )
}

