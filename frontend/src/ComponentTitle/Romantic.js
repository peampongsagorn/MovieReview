import React from 'react'
import {Link } from 'react-router-dom'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './componenttitle.css'
import Detail from '../ComponentDetail/Detail';


function Romantic() {
  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul className='navlr'>
            <div><NavLink to="/"><button class="button button4">Back to Home</button></NavLink></div>
            <div className='nav-r'><h3>Romantic</h3></div>
        </ul>
    </nav>

    <div class="container">

    <NavLink to="titanic">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://upload.wikimedia.org/wikipedia/th/8/84/Titanicposter.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Titanic</h1>
                    </div>
                </div>
            </div>
        </div>
        </NavLink>
    
    <NavLink to="เธอกับฉันกับฉัน">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://cms.dmpcdn.com/dara/2023/01/12/b66b3810-9237-11ed-882a-8d628d86a541_webp_original.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>เธอกับฉับกับฉัน</h1>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>

    <NavLink to="สิ่งเล็กๆที่เรียกว่ารัก">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://upload.wikimedia.org/wikipedia/th/1/1f/First_Love.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>สิ่งเล็กๆที่เรียกว่ารัก</h1>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>

    <NavLink to="OMG รักจังวะผิดจังหวะ">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://s359.kapook.com/pagebuilder/65a6f020-fbc6-4c3d-aca1-f35ffaac1db2.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>OMG รักจังวะผิดจังหวะ</h1>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>    
    </div>
</div>
  )
}

export default Romantic
