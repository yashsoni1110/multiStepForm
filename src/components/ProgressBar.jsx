import React from 'react';

export default function ProgressBar({ currentStep, totalSteps }) {
  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span>Step {currentStep} of {totalSteps}</span>
      </div>
      <div className="progress-bar-bg">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
