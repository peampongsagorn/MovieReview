import React, { useEffect, useState } from "react"
import axios from 'axios'


function ComponentDetail(){
    const [name, setName] = useState([]);
    

    // function getMovieDetail(){
    //     axios.get('http://localhost:8080/Romantic/titanic', { crossdomain: true})
    //     .then(response => {
    //         setName(response.data.name);
    //         setDescription(response.data.description);
    //         setImagapath(response.data.imagepath);
    //     })
    // }
    useEffect(() =>  {
        const fetchData = async() => {
            const result = await fetch('http://localhost:8080/Romantic/titanic')
            const jsonResult = await result.json()

            setName(jsonResult)
        }

        fetchData()
    }, [])

return(
    
           // <div key={movies.id}>
            <h2> {name}</h2>
           // </div>
        )
}

export default ComponentDetail
