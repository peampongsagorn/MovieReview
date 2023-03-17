import React, { useState, useEffect } from "react";
import axios from "axios";

function TitanicComponent() {
  const [data, setData] = useState([]);

  const movie_name = 'Titanic';
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
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.imagepath}</p>
        </div>
      ))}
    </div>
  );
}

export default TitanicComponent;
