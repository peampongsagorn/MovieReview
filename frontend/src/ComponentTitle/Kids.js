import React from 'react'
import {Link } from 'react-router-dom'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './componenttitle.css'

function Kids() {
  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul className='navlr'>
            <div><NavLink to="/"><button class="button button4">Back to Home</button></NavLink></div>
            <div className='nav-r'><h3>Kids</h3></div>
        </ul>
    </nav>

    <div class="container">

    <NavLink to="Addam Family">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://s359.kapook.com/rq/450/auto/50/pagebuilder/e3aef150-a594-42b2-ae84-d148a88c43fe.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Addam Family</h1>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>

    <NavLink to="DespicableMe">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="http://upload.wikimedia.org/wikipedia/th/thumb/d/db/Despicable_Me_Poster.jpg/250px-Despicable_Me_Poster.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>DespicableMe</h1>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>

    <NavLink to="BigHero6">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://upload.wikimedia.org/wikipedia/th/5/55/Big_Hero_6_poster.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>BigHero6</h1>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>

    <NavLink to="กังฟูแพนด้า">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://upload.wikimedia.org/wikipedia/th/7/76/Kungfupanda.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>กังฟูแพนด้า</h1>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>
    </div>
</div>
  )
}

export default Kids
