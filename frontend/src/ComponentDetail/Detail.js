import React, { useEffect, useState } from 'react'
import Axios from "axios";

const Detail = () => {
    const [data,setData] = useState("");
    // const [name,setName] = useState("");

    const getData=async()=>{
        const response = await Axios.get("http://localhost:8080/");
        setData(response.data);
    }
    
    useEffect(()=>{
        getData()
    },[]);
    
  return (
    <div>
      {data}
      <h3>hello</h3>
    </div>
  )
}

export default Detail

