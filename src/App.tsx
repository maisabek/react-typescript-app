import { useState } from 'react';
import './App.css';
import About from './components/about';
import Home from './components/home';
import CounterContextProvider from './context/Store';
import { Provider } from 'react-redux';
import { counterStore } from './redux/store';
import Defination from './redux/defination';

function App() {
  let name:string="hello"
  return (
    <>
    <CounterContextProvider>
      <Home />
      <About />
    </CounterContextProvider>
    
    {/* global دة يبقى store عشان اخلى ال  */}
    <Provider store={counterStore}>
       <Defination />
    </Provider>
      <h5>{name}</h5>
    </>
  );
}

export default App;
