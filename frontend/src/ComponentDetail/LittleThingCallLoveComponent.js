import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './Detail.css'
import '../ComponentTitle/componenttitle.css'

function LittleThingCallLoveComponent() {
  const [data, setData] = useState([]);

  const movie_name = 'สิ่งเล็กๆที่เรียกว่ารัก';
  useEffect(() => {
    axios.get(`http://localhost:8080/Romantic/${encodeURIComponent(movie_name)}`).then((response) => {
      console.log(response.data); // ตรวจสอบข้อมูลที่ได้รับกลับมาจาก API endpoint
      setData(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, [movie_name]);

  return (
    <div>
      {data && [data].map((item) => (
        <div class="box" key={item.id}>
          {/* <div class="header"><h2>{item.name}</h2></div> */}

          <nav>
        <div class="heading">
            <h4>Movie Review</h4>
        </div>
        <ul className='navlr'>
            <div><NavLink to="/"><button class="button button4">Back to Home</button></NavLink></div>
            <div className='nav-r'><h3>{item.name}</h3></div>
        </ul>
    </nav>
          <img class="img_s" src={item.imagepath} alt=""/> 
          <div class="story"><p>{item.description}</p></div>
        </div>
      ))}
    </div>
  );
}

export default LittleThingCallLoveComponent;
