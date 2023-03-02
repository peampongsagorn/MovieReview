import React, { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './ComponentHome.css'

// import ComponentHome from './ComponentHome';
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
        <nav>
          {/* <NavLink end to="/" className={({isActive}) => isActive? activeClassName:undefined}>Home</NavLink> */}
          <button>
          <NavLink to="/Romantic" className={({isActive}) => isActive? activeClassName:undefined}>Romantic</NavLink></button>
          <NavLink to="/Comedy" className={({isActive}) => isActive? activeClassName:undefined}>Comedy</NavLink>
          <NavLink to="/Fantasy" className={({isActive}) => isActive? activeClassName:undefined}>Fantasy</NavLink>
          <NavLink to="/Kids" className={({isActive}) => isActive? activeClassName:undefined}>Kids</NavLink>
          <NavLink to="/Drama" className={({isActive}) => isActive? activeClassName:undefined}>Drama</NavLink>
          <NavLink to="/Actions" className={({isActive}) => isActive? activeClassName:undefined}>Actions</NavLink>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/Romantic" element={<Romantic />}/>
          <Route path="/Comedy" element={<Comedy />}/>
          <Route path="/Fantasy" element={<Fantasy />}/>
          <Route path="/Kids" element={<Kids />}/>
          <Route path="/Drama" element={<Drama />}/>
          <Route path="/Actions" element={<Actions />}/>
          {/* <Route path="*" element={<Error />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default ComponentContent

