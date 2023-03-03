import React from 'react'
import {Link } from 'react-router-dom'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './componenttitle.css'

function Drama() {
  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul className='navlr'>
            <div><NavLink to="/"><button class="button button4">Back to Home</button></NavLink></div>
            <div className='nav-r'><h3>Drama</h3></div>
        </ul>
    </nav>

    <div class="container">
        <div class="item">
            <div class="main">
                <div class="tag">Travel</div>
                <div class="img">
                    <img src="https://s359.kapook.com/rq/450/auto/50/pagebuilder/49253907-831a-492a-88d4-6bf2a31de826.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Whale</h1>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://upload.wikimedia.org/wikipedia/th/thumb/0/0d/%E0%B9%83%E0%B8%9A%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B9%82%E0%B8%88%E0%B9%8A%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg/220px-%E0%B9%83%E0%B8%9A%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B9%82%E0%B8%88%E0%B9%8A%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Joker</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://upload.wikimedia.org/wikipedia/th/8/85/%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%A2%E0%B9%8C_%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%84%E0%B9%88%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A7_poster.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Fan Day แฟนกันแค่วันเดียว</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://s359.kapook.com/rq/450/auto/50/pagebuilder/49253907-831a-492a-88d4-6bf2a31de826.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>20th Century Girl</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Drama
