import React, { useState } from 'react'
import axios from 'axios'

function Detail() {
     const [name, setName] = useState("");

     function getDetail(){
        axios.get('http://localhost:8080/Romantic/titanic' ,{cressdomain: true})
            .then(Response => {
                setName(Response.data.name);
            })
        axios.get('http://localhost:8080/Romantic/:name' ,{cressdomain: true})
            .then(Response => {
                setName(Response.data.name);
            })
     }
    return(
        <div>
            {/* <button onClick={getDetail}>DetailName</button> */}
            <h1>{name}</h1>
            <h1>Hi this is Detail</h1>
        </div>
    )
}

export default Detail
