import { useState } from 'react';
import './App.css';
import About from './components/about';
import Home from './components/home';
import CounterContextProvider from './context/Store';

function App() {
  let name:string="hello"
  return (
    <>
    <CounterContextProvider>
      <Home />
      <About />
    </CounterContextProvider>
    
      <h5>{name}</h5>
    </>
  );
}

export default App;
