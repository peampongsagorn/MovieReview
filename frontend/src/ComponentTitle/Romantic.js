import React from 'react'
import {Link } from 'react-router-dom'

function Romantic() {
  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul class="nav-links">
            <Link to="/">Back to Home</Link>
            <h3>Romantic</h3>
        </ul>
    </nav>

    <div class="container">
        <div class="item">
            <div class="main">
                <div class="img">
                    {/* <img src="pic1.jpg" alt=""> */}
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Some Title</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="main">
                <div class="img">
                    {/* <img src="pic1.jpg" alt=""> */}
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Some Title</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="main">
                <div class="img">
                    {/* <img src="pic1.jpg" alt=""> */}
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Some Title</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="main">
                <div class="img">
                    {/* <img src="pic1.jpg" alt=""> */}
                </div>
                <div class="content">
                    <div class="center">
                        <h1>Some Title</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Romantic
