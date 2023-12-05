// import React, { useState } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import About from './About';
import Login from './Login';
import NotFound from './NotFound';



function App() {



  return (
    <>

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/:id' element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
