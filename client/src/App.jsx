import React from 'react';
import './App.css';
import {Home} from './pages/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='main'>
     
      <div className='container mx-auto'> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      </div>
      
    </div>
  );
}

export default App;
