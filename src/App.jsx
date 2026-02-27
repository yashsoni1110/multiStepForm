import React, { useState, useEffect } from 'react';
import MultiStepForm from './components/MultiStepForm';
import { Sun, Moon } from 'lucide-react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      <h1>Registration Wizard</h1>
      <MultiStepForm />
    </div>
  );
}

export default App;
