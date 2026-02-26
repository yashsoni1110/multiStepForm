import React from 'react';

export default function PersonalInfo({ firstName, lastName, dateOfBirth, updateFields, onNext }) {
  const isValid = firstName.trim().length > 1 && lastName.trim().length > 1 && dateOfBirth;

  return (
    <div className="step-wrapper">
      <h2>Personal Information</h2>
      <p className="subtitle">Tell us a bit about yourself.</p>
      
      <div className="input-group">
        <label htmlFor="firstName">First Name</label>
        <input 
          autoFocus
          required
          type="text" 
          id="firstName"
          placeholder="e.g. Jane"
          value={firstName} 
          onChange={e => updateFields({ firstName: e.target.value })} 
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="lastName">Last Name</label>
        <input 
          required
          type="text" 
          id="lastName"
          placeholder="e.g. Doe"
          value={lastName} 
          onChange={e => updateFields({ lastName: e.target.value })} 
        />
      </div>

      <div className="input-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input 
          required
          type="date" 
          id="dateOfBirth"
          value={dateOfBirth} 
          onChange={e => updateFields({ dateOfBirth: e.target.value })} 
        />
      </div>

      <div className="button-group-right">
        <button 
          type="button" 
          className="btn-primary" 
          onClick={onNext} 
          disabled={!isValid}
        >
          Next
        </button>
      </div>
    </div>
  );
}
