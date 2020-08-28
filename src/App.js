import React from 'react';
import './App.css';
import Characters from './components/Characters'

require('dotenv').config()

export default function App() {
  return (
    <div className="App">
      <Characters />
    </div>
  );
}


