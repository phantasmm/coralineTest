import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login'
import GradeCalculation from './components/GradeCalculation'

function App() {
  return (
    <div className="App">
      
      <h1>Topic 1</h1>
      <GradeCalculation/>
      <h1>Topic 3</h1>
      <Login/>

    </div>
  );
}

export default App;
