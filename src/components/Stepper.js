import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ContractContext } from "./ContractContext";

function Stepper() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={currentStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.title} onClick={() => { handleStep(index) }}  >
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default Stepper