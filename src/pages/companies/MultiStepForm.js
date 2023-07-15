import React, { useState } from 'react';
import { Steps } from 'rc-steps';
// import 'rc-steps/assets/index.css';
// import 'rc-steps/assets/iconfont.css';


    

      const MultiStepForm = () => {
        const [currentStep, setCurrentStep] = useState(0);

        const steps = [
          {
            title: 'Step 1',
            content: 'Content of Step 1',
          },
          {
            title: 'Step 2',
            content: 'Content of Step 2',
          },
          {
            title: 'Step 3',
            content: 'Content of Step 3',
          },
        ];

        const nextStep = () => {
            setCurrentStep(currentStep + 1);
          };
        
          const prevStep = () => {
            setCurrentStep(currentStep - 1);
          };
        



  return (
    <div className="container">
    <div className="steps-container">
      <Steps current={currentStep} direction="vertical">
        {steps.map((step) => (
          <Steps.Step key={step.title} title={step.title} />
        ))}
      </Steps>
    </div>
    <div className="form-container">
      <div className="form-content">{steps[currentStep].content}</div>
      <div className="form-navigation">
        {currentStep > 0 && (
          <button onClick={prevStep}>Previous</button>
        )}
        {currentStep < steps.length - 1 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={() => console.log('Form submitted!')}>Submit</button>
        )}
      </div>
    </div>
  </div>

  )
}

export default MultiStepForm
