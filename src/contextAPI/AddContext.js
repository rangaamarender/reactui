import React, { createContext, useState } from 'react';

export const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const updateCurrentStepState = (newState) => {
        setCurrentStep(newState);
    }
    return (
        <ContractContext.Provider value={{ currentStep, updateCurrentStepState }}>
            {children}
        </ContractContext.Provider>
    )
}

export const ResourceContext = createContext();

export const ResourceProvider = ({ children }) => {
    const [ResourceCurrentStep, setResourceCurrentStep] = useState(0);

    const updateResourceCurrentStepState = (newState) => {
        setResourceCurrentStep(newState);
    }
    return (
        <ResourceContext.Provider value={{ ResourceCurrentStep, updateResourceCurrentStepState }}>
            {children}
        </ResourceContext.Provider>
    )
}

