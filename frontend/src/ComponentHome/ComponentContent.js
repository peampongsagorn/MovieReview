import React, { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './ComponentHome.css'

import ComponentHome from './ComponentHome';
import Home from '../ComponentTitle/Home';
import Romantic from '../ComponentTitle/Romantic';
import Comedy from '../ComponentTitle/Comedy';
import Fantasy from '../ComponentTitle/Fantasy';
import Kids from '../ComponentTitle/Kids';
import Drama from '../ComponentTitle/Drama';
import Actions from '../ComponentTitle/Actions';

function ComponentContent() {

  let activeClassName = "nav-active"

  return (
    <>
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
          <nav className="NavTitle">
          {/* <div className="buttonlink">
            <NavLink end to="/" className={({isActive}) => isActive? activeClassName:undefined}>Home</NavLink>
          </div> */}
          <div className="buttonlink">
            <NavLink to="/Romantic" className={({isActive}) => isActive? activeClassName:undefined}>Romantic</NavLink>
          </div>
          <div className="buttonlink">
            <NavLink to="/Comedy" className={({isActive}) => isActive? activeClassName:undefined}>Comedy</NavLink>
          </div>
          <div className="buttonlink">
            <NavLink to="/Fantasy" className={({isActive}) => isActive? activeClassName:undefined}>Fantasy</NavLink>
          </div>
          <div className="buttonlink">
            <NavLink to="/Kids" className={({isActive}) => isActive? activeClassName:undefined}>Kids</NavLink>
          </div>
          <div className="buttonlink">
            <NavLink to="/Drama" className={({isActive}) => isActive? activeClassName:undefined}>Drama</NavLink>
          </div>
          <div className="buttonlink">
            <NavLink to="/Actions" className={({isActive}) => isActive? activeClassName:undefined}>Actions</NavLink>
          </div>
        </nav>
        
      </BrowserRouter>
    </>
  )
}

export default ComponentContent

