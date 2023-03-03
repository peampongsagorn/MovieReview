import React, { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './ComponentHome.css'

// import ComponentHome from './ComponentHome';
import Home from '../ComponentTitle/Home';
import Romantic from '../ComponentTitle/Romantic';
import Comedy from '../ComponentTitle/Comedy';
import Fantasy from '../ComponentTitle/Fantasy';
import Kids from '../ComponentTitle/Kids';
import Drama from '../ComponentTitle/Drama';
import Actions from '../ComponentTitle/Actions';
<<<<<<< HEAD
import Detail from '../ComponentDetail/Detail';
import ComponentDetail from '../ComponentDetail/ComponentDetail';
=======
>>>>>>> ac406f724f538b2b259abf65baabb82709309e12
// import ComponentDetail from '../ComponentDetail/ComponentDetail';
import Detail from '../ComponentDetail/Detail';
// import Movie from '../ComponentDetail/Movie';

function ComponentContent() {

  // let activeClassName = "nav-active"
  // const [name, setName] = useState("");

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
<<<<<<< HEAD
          <Route path="Romantic/titanic" element={<ComponentDetail />}/>
=======
          <Route path="/Romantic/titanic" element={<Detail/>}/>
>>>>>>> ac406f724f538b2b259abf65baabb82709309e12
          {/* <Route path="*" element={<Error />}/> */}
        </Routes> 
          {/* <nav className="NavTitle">
           <div className="buttonlink">
            <NavLink end to="/" className={({isActive}) => isActive? activeClassName:undefined}>Home</NavLink>
          </div> 
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
        </nav> */}
        
      </BrowserRouter>
    </>
  )
}

export default ComponentContent

