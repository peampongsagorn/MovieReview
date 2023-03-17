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
import Detail from '../ComponentDetail/Detail';
import ComponentDetail from '../ComponentDetail/ComponentDetail';

function ComponentContent() {

let activeClassName = "nav-active"
const [name, setName] = useState("");

  return (
    <>
        <BrowserRouter>
          {/* <nav>
            <NavLink end to="/" className={({isActive}) => isActive? activeClassName:undefined}>Home</NavLink>
            <NavLink to="/Romantic" className={({isActive}) => isActive? activeClassName:undefined}>Romantic</NavLink>
            <NavLink to="/Comedy" className={({isActive}) => isActive? activeClassName:undefined}>Comedy</NavLink>
            <NavLink to="/Fantasy" className={({isActive}) => isActive? activeClassName:undefined}>Fantasy</NavLink>
            <NavLink to="/Kids" className={({isActive}) => isActive? activeClassName:undefined}>Kids</NavLink>
            <NavLink to="/Drama" className={({isActive}) => isActive? activeClassName:undefined}>Drama</NavLink>
            <NavLink to="/Actions" className={({isActive}) => isActive? activeClassName:undefined}>Actions</NavLink>
          </nav> */}

          <Routes>
          <Route path="/" element={<Home />}/>

          <Route path="/Romantic" element={<Romantic />}/>{}
          <Route path="/Romantic/titanic" element={<Detail/>}/>
          <Route path="/Romantic/เธอกับฉันกับฉัน" element={<ComponentDetail/>}/>
          <Route path="/Romantic/สิ่งเล็กๆที่เรียกว่ารัก" element={<Detail/>}/>
          <Route path="/Romantic/OMG รักจังวะผิดจังหวะ" element={<Detail/>}/>

          <Route path="/Comedy" element={<Comedy />}/>
          <Route path="/Comedy/หอเเต๋วเเตก" element={<Detail/>}/>
          <Route path="/Comedy/Lyle crocodile" element={<Detail/>}/>
          <Route path="/Comedy/jumanji" element={<Detail/>}/>
          <Route path="/Comedy/7 ประจัญบาน" element={<Detail />}/>

          <Route path="/Fantasy" element={<Fantasy />}/>
          <Route path="/Fantasy/Harry Potter กับศิลาอาถรรพ์" element={<Detail/>}/>
          <Route path="/Fantasy/Fantastic Beast" element={<Detail/>}/>
          <Route path="/Fantasy/Alice in Wonderland" element={<Detail/>}/>
          <Route path="/Fantasy/Harry Potter กับ เครื่องรางยมทูต" element={<Detail />}/>

          <Route path="/Kids" element={<Kids />}/>
          <Route path="/Kids/Addam Family" element={<Detail/>}/>
          <Route path="/Kids/DespicableMe" element={<Detail/>}/>
          <Route path="/Kids/BigHero6" element={<Detail/>}/>
          <Route path="/Kids/กังฟูแพนด้า" element={<Detail />}/>

          <Route path="/Drama" element={<Drama />}/>
          <Route path="/Drama/Whale" element={<Detail/>}/>
          <Route path="/Drama/Joker" element={<Detail/>}/>
          <Route path="/Drama/Fan Day แฟนกันแค่วันเดียว" element={<Detail/>}/>
          <Route path="/Drama/20th Century Girl" element={<Detail />}/>

          <Route path="/Actions" element={<Actions />}/>
          <Route path="/Actions/Red notice" element={<Detail/>}/>
          <Route path="/Actions/Fast 9" element={<Detail/>}/>
          <Route path="/Actions/Die Hard" element={<Detail/>}/>
          <Route path="/Actions/Jack reacher" element={<Detail />}/>

          {/* <Route path="*" element={<Error />}/>  */}
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default ComponentContent

