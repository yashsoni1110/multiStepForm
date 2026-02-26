import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function SuccessScreen() {
  return (
    <div className="wizard-container success-container">
      <div className="success-icon-wrapper">
        <CheckCircle size={80} className="success-icon" />
      </div>
      <h2>Registration Successful!</h2>
      <p className="subtitle">Thank you for signing up. Your account has been created successfully.</p>
      <button 
        type="button" 
        className="btn-primary mt-8" 
        onClick={() => window.location.reload()}
      >
        Start Over
      </button>
    </div>
  );
}
