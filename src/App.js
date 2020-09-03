import React from 'react';
import './App.css';

//Component imports
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header'

require('dotenv').config()

export default function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
    </div>
  );
}


