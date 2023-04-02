import './App.css';
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom'
import Navbarr from './component/Navbarr';
import Main from './component/Main';


function App() {
  return (
    <div className='App'>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Main /> }></Route>
      </Routes>

    </div>
  );
}

export default App;
