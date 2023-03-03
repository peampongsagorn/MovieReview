import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './ComponentNav.css'

import ComponentHome from './ComponentHome';
import Home from '../ComponentTitle/Home';
import Romantic from '../ComponentTitle/Romantic';
import Comedy from '../ComponentTitle/Comedy';
import Fantasy from '../ComponentTitle/Fantasy';
import Kids from '../ComponentTitle/Kids';
import Drama from '../ComponentTitle/Drama';
import Actions from '../ComponentTitle/Actions';

function ComponentNavbar() {
  return (
    <>
       <nav>
            <div class="heading">
                <h4>Movie Review</h4>
            </div>
            <ul class="nav-links">
                
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Romantic" element={<Romantic />}/>
          <Route path="/Comedy" element={<Comedy />}/>
          <Route path="/Fantasy" element={<Fantasy />}/>
          <Route path="/Kids" element={<Kids />}/>
          <Route path="/Drama" element={<Drama />}/>
          <Route path="/Actions" element={<Actions />}/>
          {/* <Route path="*" element={<Error />}/> */}
        </Routes> 
        </BrowserRouter>
            </ul>
        </nav>
    </>
  )
}

export default ComponentNavbar
