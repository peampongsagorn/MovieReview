import React from 'react'
import {Link } from 'react-router-dom'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './componenttitle.css'

function Fantasy() {
  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul className='navlr'>
            <div><NavLink to="/"><button class="button button4">Back to Home</button></NavLink></div>
            <div className='nav-r'><h3>Fantasy</h3></div>
        </ul>
    </nav>

    <div class="container">
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://images.workpointnews.com/workpointnews/2022/01/11121712/1641878230_16481_HarryPotterandtheSorcerer_sStone-Poster.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Harry Potter กับศิลาอาถรรพ์</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://upload.wikimedia.org/wikipedia/th/thumb/d/d3/%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B8%A1%E0%B8%AB%E0%B8%B1%E0%B8%A8%E0%B8%88%E0%B8%A3%E0%B8%A3%E0%B8%A2%E0%B9%8C_%E0%B9%82%E0%B8%9B%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg/640px-%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B8%A1%E0%B8%AB%E0%B8%B1%E0%B8%A8%E0%B8%88%E0%B8%A3%E0%B8%A3%E0%B8%A2%E0%B9%8C_%E0%B9%82%E0%B8%9B%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Fantastic Beast</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://www.nangdee.com/photoThumbnail/items/m1943_WKT2CJvWed35540.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Alice in Wonderland</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="main">
                <div class="img">
                    <img src="https://upload.wikimedia.org/wikipedia/th/thumb/5/51/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%A2%E0%B8%A1%E0%B8%97%E0%B8%B9%E0%B8%95%E0%B8%A0%E0%B8%B2%E0%B8%841.jpg/220px-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%A2%E0%B8%A1%E0%B8%97%E0%B8%B9%E0%B8%95%E0%B8%A0%E0%B8%B2%E0%B8%841.jpg" alt=""/>
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Harry Potter กับ เครื่องรางยมทูต</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Fantasy
