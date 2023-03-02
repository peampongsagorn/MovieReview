import React from 'react'
import {Link } from 'react-router-dom'

function Comedy() {
  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul class="nav-links">
            <Link to="/">Back to Home</Link>
            <h3>Actions</h3>
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
             
                        <h1>หอเเต๋วเเตก</h1>
                  
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
                    
                        <h1>Lyle crocodile</h1>
                    
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
                        <h1>jumanji</h1>
                       
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
                        <h1>ประจัญบาน</h1>
                  
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Comedy
