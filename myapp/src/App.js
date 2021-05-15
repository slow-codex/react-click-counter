import React from 'react';
//import logo from './logo.svg';
import './App.css';
import FC from "./Components/FunctionalComp";
import {ClassComp,ClassComp1} from "./Components/ClassComp";
import Click from "./Components/Click";
function App() {
  return (
    <div className="App">
      <h1> Hello! Welcome </h1>
      <FC />
      <ClassComp />
      <ClassComp1 />
      <Click />
    </div>
    
  );
}

export default App;
