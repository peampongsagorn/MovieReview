import React from 'react'
import './componenttitle.css'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Detail from '../ComponentDetail/Detail';

function Home() {

let activeClassName = "nav-active"

  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul class="nav-links">
            <h3>Home</h3>
        </ul>
    </nav>
    
    <div className='containerHome' >
    <div class="flex-container-1">
    <div><NavLink to="/Romantic"><button class="button button4">Romantic</button></NavLink></div>
    <div><NavLink to="/Kids"><button class="button button4">Kids</button></NavLink></div>
    <div><NavLink to="/Fantasy"><button class="button button4">Fantasy</button></NavLink></div>
    </div>
    
    <div class="flex-container-2">
    <div><NavLink to="/Drama"><button class="button button4">Drama</button></NavLink></div>
    <div><NavLink to="/Comedy"><button class="button button4">Comedy</button></NavLink></div>
    <div><NavLink to="/Actions"><button class="button button4">Actions</button></NavLink></div>
    </div>
    </div>
</div>
  )
}

export default Home
