import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ResourceContext } from "./ResourceContext";
import { Steps } from 'primereact/steps';

const steps = [
  { title: "RESOURCE" },
  { title: "VENDOR (IF C2C)" },
  { title: "ASSIGN DOCUMENTS" },
];

export default function AddSteps() {
  const { currentStep, updateCurrentStepState } = useContext(ResourceContext)

  const handleStep = (index) => {
    updateCurrentStepState(index)
  }

  return (
    <>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={currentStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.title} onClick={() => { handleStep(index) }}  >
              <StepLabel>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

    </>
  );
}