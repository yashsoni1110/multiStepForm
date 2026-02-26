import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function AccountDetails({ email, password, confirmPassword, updateFields, onNext, onBack }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Using Regex for email validation as requested in the "Regex" theme
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hasAtSymbol = /@/.test(email);
  const emailIsValid = emailRegex.test(email);
  
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  
  const passwordIsValid = hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  const matchIsValid = confirmPassword === password && password.length > 0;
  
  const isValid = emailIsValid && passwordIsValid && matchIsValid;

  return (
    <div className="step-wrapper">
      <h2>Account Details</h2>
      <p className="subtitle">Secure your new account.</p>
      
      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <input 
          autoFocus
          required
          type="email" 
          id="email"
          placeholder="jane@example.com"
          value={email} 
          onChange={e => updateFields({ email: e.target.value })} 
        />
        {email.length > 0 && !emailIsValid && (
          <span className="error-text">
            {!hasAtSymbol ? 'Email must contain an "@" symbol.' : 'Please enter a valid email address.'}
          </span>
        )}
      </div>
      
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input 
            required
            type={showPassword ? "text" : "password"} 
            id="password"
            placeholder="At least 8 characters"
            value={password} 
            onChange={e => updateFields({ password: e.target.value })} 
          />
          <button 
            type="button" 
            className="toggle-password" 
            onClick={() => setShowPassword(!showPassword)}
            tabIndex="-1"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {password.length > 0 && !passwordIsValid && (
          <span className="error-text">
            Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.
          </span>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="password-wrapper">
          <input 
            required
            type={showConfirm ? "text" : "password"} 
            id="confirmPassword"
            placeholder="Matching password"
            value={confirmPassword} 
            onChange={e => updateFields({ confirmPassword: e.target.value })} 
          />
          <button 
            type="button" 
            className="toggle-password" 
            onClick={() => setShowConfirm(!showConfirm)}
            tabIndex="-1"
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {confirmPassword.length > 0 && !matchIsValid && (
          <span className="error-text">Passwords do not match.</span>
        )}
      </div>

      <div className="button-group-between">
        <button type="button" className="btn-secondary" onClick={onBack}>
          Back
        </button>
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
