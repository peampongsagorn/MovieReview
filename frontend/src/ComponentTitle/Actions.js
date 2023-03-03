import React from 'react'
import {Link } from 'react-router-dom'
import './componenttitle.css'
// import Movie from '../ComponentDetail/Com';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Romantic from '../ComponentTitle/Romantic';

function Actions() {
  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul className='navlr'>
            <div><NavLink to="/"><button class="button button4">Back to Home</button></NavLink></div>
            <div className='nav-r'><h3>Actions</h3></div>
        </ul>
    </nav>
    
    <div class="container">

    
    <NavLink to="Red notice">
        <div class="item">
            <div class="main">
                <div class="img">
                         <img src="https://i.ebayimg.com/images/g/A1cAAOSwcsljdyCI/s-l1600.jpg" alt=""/> 
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Red notice</h1>
                    </div>
                </div>
            </div>
        </div>
    </NavLink> 

        <NavLink to="Fast 9">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://upload.wikimedia.org/wikipedia/th/4/4b/%E0%B9%83%E0%B8%9A%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7..%E0%B9%81%E0%B8%A3%E0%B8%87%E0%B8%97%E0%B8%B0%E0%B8%A5%E0%B8%B8%E0%B8%99%E0%B8%A3%E0%B8%81_9.jpg" alt=""/> 
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Fast 9</h1>
                    </div>
                </div>
            </div>
        </div>
        </NavLink>
        <NavLink to="Die Hard">
        <div class="item">
            <div class="main">
                <div class="img">
                      <img src="https://upload.wikimedia.org/wikipedia/th/thumb/1/1f/Live_Free_or_Die_Hard_poster.jpg/800px-Live_Free_or_Die_Hard_poster.jpg" alt=""/> 
                </div>
                <div class="content">
                    <div class="center">            
                        <h1>Die Hard</h1>
                    </div>
                </div>
            </div>
        </div>
        </NavLink>
        <NavLink to="Jack reacher">
        <div class="item">
            <div class="main">
                <div class="img">
                     <img src="https://www.nangdee.com/photoThumbnail/items/m3169_LFI74X0Thu43954.jpg" alt=""/> 
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Jack reacher</h1>
                    </div>
                </div>
            </div>
        </div>
        </NavLink>

    </div>
</div>
  )
}

export default Actions
