import { Steps } from 'primereact/steps';
import { classNames } from 'primereact/utils';
import { classNames as inputClassNames } from 'primereact/inputtext';
import { useEffect, useState } from 'react';

const CustomSteps = ({ steps, activeIndex }) => {
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    setCompletedSteps(steps.slice(0, activeIndex));
  }, [activeIndex, steps]);

  const isStepCompleted = (index) => {
    return completedSteps.includes(index);
  };

  const renderStepLabel = (step, index) => {
    const stepClassName = classNames('custom-step-label', {
      'custom-step-label-completed': isStepCompleted(index),
      'custom-step-label-active': activeIndex === index,
    });

    return (
      <div className={stepClassName}>
        <span className="custom-step-icon pi pi-check"></span>
        <span className="custom-step-text">{step.label}</span>
      </div>
    );
  };

  return (
    <div className="custom-steps">
      <Steps
        model={steps}
        activeIndex={activeIndex}
        readOnly
        renderLabel={renderStepLabel}
      />
    </div>
  );
};
export default CustomSteps
