import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import AccountDetails from './AccountDetails';
import ReviewSubmit from './ReviewSubmit';
import SuccessScreen from './SuccessScreen';
import ProgressBar from './ProgressBar';
import './MultiStepForm.css';

const INITIAL_DATA = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function MultiStepForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateFields = (fields) => {
    setData(prev => {
      return { ...prev, ...fields }
    });
  };

  const next = () => {
    setCurrentStep(i => {
      if (i >= 3) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStep(i => {
      if (i <= 1) return i;
      return i - 1;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentStep !== 3) return;
    console.log("Form Submitted Successfully:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return <SuccessScreen />;
  }

  return (
    <div className="wizard-container">
      <ProgressBar currentStep={currentStep} totalSteps={3} />
      <div className="form-card">
        <form onSubmit={onSubmit}>
          {currentStep === 1 && (
            <PersonalInfo 
              {...data} 
              updateFields={updateFields} 
              onNext={next} 
            />
          )}
          {currentStep === 2 && (
            <AccountDetails 
              {...data} 
              updateFields={updateFields} 
              onNext={next} 
              onBack={back} 
            />
          )}
          {currentStep === 3 && (
            <ReviewSubmit 
              data={data} 
              onBack={back} 
            />
          )}
        </form>
      </div>
    </div>
  );
}
