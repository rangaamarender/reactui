import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { AddResourceContext } from "./AddResourceContext";

const steps = [
    { title: "RESOURCE" },
    { title: "CONTRACT ID" },
    { title: "WO RATE (BILL RATE)" },
    { title: "PAY PROFILE (PAY RATE)" },
    { title: "DOCUMENTS" },
  ];

export default function ResourceAddSteps() {
  const { currentStep, updateCurrentStepState } = useContext(AddResourceContext)
  
  const handleStep = (index) => {
    updateCurrentStepState(index)
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={currentStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.title} onClick={() =>{ handleStep(index) }}  >
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}