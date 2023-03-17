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

    const movieresult = JSON.stringify(name)

return(
    
           // <div key={movies.id}>
            <div className='name_container'>
                { name.map(detail =>
                    <div key={detail.id}>
                        <h2> {detail.name} </h2>
                        </div>)}            
            </div>
        )
}

export default ComponentDetail
