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


import YouAndMeAndMeComponent from '../ComponentDetail/YouAndMeAndMeComponent';
import TitanicComponent from '../ComponentDetail/TitanicComponent';
import LittleThingCallLoveComponent from '../ComponentDetail/LittleThingCallLoveComponent';
import OmgComponent from '../ComponentDetail/OmgComponent';

//fantasy
import FantasticComponent from '../ComponentDetail/FantasticComponent';
import AliceComponent from '../ComponentDetail/AliceComponent';
import Harry7Component from '../ComponentDetail/Harry7Component';
import Harry1Component from '../ComponentDetail/Harry1Component';

//Kids
import AddamComponent from '../ComponentDetail/AddamComponent';
import DespicableMeComponent from '../ComponentDetail/DespicableMeComponent';
import BigHero6Component from '../ComponentDetail/BigHero6Component';
import KunfuComponent from '../ComponentDetail/KunfuComponent';


import WhaleComponent from '../ComponentDetail/WhaleComponent';
import twentythComponent from '../ComponentDetail/twentythComponent';
import FandayComponent from '../ComponentDetail/FandayComponent';
import JokerComponent from '../ComponentDetail/JokerComponent';

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
          <Route path="/Romantic/titanic" element={<TitanicComponent/>}/>
          <Route path="/Romantic/เธอกับฉันกับฉัน" element={<YouAndMeAndMeComponent/>}/>
          <Route path="/Romantic/สิ่งเล็กๆที่เรียกว่ารัก" element={<LittleThingCallLoveComponent/>}/>
          <Route path="/Romantic/OMG รักจังวะผิดจังหวะ" element={<OmgComponent/>}/>

          <Route path="/Comedy" element={<Comedy />}/>
          <Route path="/Comedy/หอเเต๋วเเตก" element={<Detail/>}/>
          <Route path="/Comedy/Lyle crocodile" element={<Detail/>}/>
          <Route path="/Comedy/jumanji" element={<Detail/>}/>
          <Route path="/Comedy/7 ประจัญบาน" element={<Detail />}/>

          <Route path="/Fantasy" element={<Fantasy />}/>
          <Route path="/Fantasy/Harry Potter กับศิลาอาถรรพ์" element={<Harry1Component/>}/>
          <Route path="/Fantasy/Fantastic Beast" element={<FantasticComponent/>}/>
          <Route path="/Fantasy/Alice in Wonderland" element={<AliceComponent/>}/>
          <Route path="/Fantasy/Harry Potter กับ เครื่องรางยมทูต" element={<Harry7Component />}/>

          <Route path="/Kids" element={<Kids />}/>
          <Route path="/Kids/Addam Family" element={<AddamComponent/>}/>
          <Route path="/Kids/DespicableMe" element={<DespicableMeComponent/>}/>
          <Route path="/Kids/BigHero6" element={<BigHero6Component/>}/>
          <Route path="/Kids/กังฟูแพนด้า" element={<KunfuComponent />}/>

          <Route path="/Drama" element={<Drama />}/>
          <Route path="/Drama/Whale" element={<WhaleComponent/>}/>
          <Route path="/Drama/Joker" element={<JokerComponent/>}/>
          <Route path="/Drama/Fan Day แฟนกันแค่วันเดียว" element={<FandayComponent/>}/>
          <Route path="/Drama/20th Century Girl" element={<twentythComponent />}/>

          <Route path="/Actions" element={<Actions />}/>
          <Route path="/Actions/Red notice" element={<RedNoticeComponent/>}/>
          <Route path="/Actions/Fast 9" element={<FastandFerious9Component/>}/>
          <Route path="/Actions/Die Hard" element={<DieHardComponent/>}/>
          <Route path="/Actions/Jack reacher" element={<JackReacherComponent />}/>

          {/* <Route path="*" element={<Error />}/>  */}
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default ComponentContent

