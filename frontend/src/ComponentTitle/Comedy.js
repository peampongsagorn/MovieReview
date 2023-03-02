import React from 'react'
import {Link } from 'react-router-dom'
import './componenttitle.css'

function Comedy() {
  return (
    <div>
    <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul class="nav-links">
            <Link to="/">Back to Home</Link>
            <h3>Comedy</h3>
        </ul>
    </nav>

    <div class="container">
        <div class="item">
            <div class="main">
                <div class="img">

                    <img src="https://www.nangdee.com/photoThumbnail/items/m5256_9AeZMRYWed41932.jpg" alt=""/>

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

                     <img src="https://m.media-amazon.com/images/M/MV5BODVhODBjYjAtOGUwZS00ZDFlLWFhZTEtZTM5OGNiNDAxYTFkXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" alt=""/> 

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
                         <img src="https://s359.thaibuffer.com/pagebuilder/47cf61aa-5880-4c88-ada6-d5acdc329085.jpg" alt=""/> 
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
                <img src="https://upload.wikimedia.org/wikipedia/th/0/01/7_%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B1%E0%B8%8D%E0%B8%9A%E0%B8%B2%E0%B8%99_%282545%29.jpg" alt=""/> 
                </div>
                <div class="content">
                    <div class="center">
                        <h1>7 ประจัญบาน</h1>
                  
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Comedy
