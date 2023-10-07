import './App.css';
import About from './context/about';
import Home from './context/home';
import CounterContextProvider from './context/Store';
import { Provider } from 'react-redux';
import { counterStore } from './redux-without-api/store';
import Defination from './redux-defination/defination';
import Index from './redux-with-api/components/List';
import Add from './redux-with-api/components/Add';
import ApiStore from './redux-with-api/store';
import { Route, Router, Routes } from 'react-router-dom';
import Edit from './redux-with-api/components/Edit';
import Navbar from './components/navbar';
import Counter from './redux-without-api/Counter';

function App() {
  return (
    <>
    <Navbar />
    <div className='mx-3 my-4'>
      <CounterContextProvider>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>
      </CounterContextProvider>

      {/* global دة يبقى store عشان اخلى ال  */}
      <Provider store={counterStore}>
        <Routes>
          <Route path="counter" element={<Counter />} />
        </Routes>
      </Provider>
      <Provider store={ApiStore}>
        <Routes>
          <Route path="index" element={<Index />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Routes>
      </Provider>
      </div>
    </>
  );
}

export default App;
