import React from 'react'
import {Link } from 'react-router-dom'

function Kids() {
  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul class="nav-links">
            <Link to="/">Back to Home</Link>
            <h3>Kids</h3>
        </ul>
    </nav>

    <div class="container">
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
    </div>
</div>
  )
}

export default Kids
