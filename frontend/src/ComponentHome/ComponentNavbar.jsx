import React from 'react'

import React, { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './ComponentHome.css'
import { links } from '../data';
import ComponentHome from './ComponentHome';
import Home from '../ComponentTitle/Home';
import Romantic from '../ComponentTitle/Romantic';
import Comedy from '../ComponentTitle/Comedy';
import Fantasy from '../ComponentTitle/Fantasy';
import Kids from '../ComponentTitle/Kids';
import Drama from '../ComponentTitle/Drama';
import Actions from '../ComponentTitle/Actions';

const ComponentNavbar = () => {
  return (
    <nav>
        <div className="container nav_container">
            <NavLink end to="/" className={({isActive}) => isActive? activeClassName:undefined}>Home</NavLink>
        </div>
        <ul className='nav_links'>
            {
                links.map(({name, path}, index) => {
                    return(
                        <li>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul> 
        <button className=' nav__toggle-btn'>
            
        </button>

    </nav>
  )
}

export default ComponentNavbar
