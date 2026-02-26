import React from 'react';

export default function ReviewSubmit({ data, onBack }) {
  return (
    <div className="step-wrapper">
      <h2>Review & Submit</h2>
      <p className="subtitle">Double-check your information before finishing.</p>
      
      <div className="review-section">
        <h3>Personal Information</h3>
        <div className="review-item">
          <span className="review-label">First Name:</span>
          <span className="review-value">{data.firstName}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Last Name:</span>
          <span className="review-value">{data.lastName}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Date of Birth:</span>
          <span className="review-value">{data.dateOfBirth}</span>
        </div>
      </div>

      <div className="review-section">
        <h3>Account Details</h3>
        <div className="review-item">
          <span className="review-label">Email:</span>
          <span className="review-value">{data.email}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Password:</span>
          <span className="review-value">{"*".repeat(data.password.length)}</span>
        </div>
      </div>

      <div className="button-group-between mt-8">
        <button type="button" className="btn-secondary" onClick={onBack}>
          Back
        </button>
        <button 
          type="submit" 
          className="btn-success"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
