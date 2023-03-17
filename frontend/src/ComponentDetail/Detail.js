import React, { useEffect, useState } from 'react'
import Axios from "axios";

const Detail = () => {
//     const [data,setData] = useState("");
//     // const [name,setName] = useState("");

//     const getData=async()=>{
//         const response = await Axios.get("http://localhost:8080/");
//         setData(response.data);
//     }
    
//     useEffect(()=>{
//         getData()
//     },[]);
    
//   return (
//     <div>
//       {data}
//       <h3>hello</h3>
//     </div>
//   )
// }

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
            <><h2> {name}</h2></>
           // </div>
        )
}

export default Detail

