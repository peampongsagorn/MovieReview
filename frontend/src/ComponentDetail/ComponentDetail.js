import React, { useEffect, useState } from "react"
import axios from 'axios'
//import { movie } from "../../../Backend/myrouter";

function ComponentDetail(){
    //axios.get('http://localhost:8080/Romantic/titanic', { crossdomain: true})
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imagepath, setImagapath] = useState("");
    const [comment, setComment] = useState("");

    function getMovieDetail(){
        axios.get('http://localhost:8080/Romantic/titanic', { crossdomain: true})
        .then(response => {
            setName(response.data.name);
            setDescription(response.data.description);
            setImagapath(response.data.imagepath);
            //setComment(response.data.comment);
        })
    }


<<<<<<< HEAD
// const movies = axios.create({
//     baseURL: "http://localhost:8080/Romantic/titanic"
// })
=======
const ComponentDetail = () => {
    const [movies, setMovie] = useState([]);
    // const [description, setDescription] = useState("");
    // const [imagepath, setImagapath] = useState("");
    // const [comment, setComment] = useState("");
>>>>>>> ac406f724f538b2b259abf65baabb82709309e12

// const ComponentDetail = () => {
//     const [movies, setMovie] = useState([]);
//     // const [description, setDescription] = useState("");
//     // const [imagepath, setImagapath] = useState("");
//     // const [comment, setComment] = useState("");

//     useEffect(() => {
//         movies.get('?_limit=10', { crossdomain: true})
//                 .then((response) => {
//                     setMovie(response.data);
//                     // setDescription(response.data.description);
//                     // setImagapath(response.data.imagepath);
//                     // setComment(response.data.comment);
//     })
//             },[])

return(
    
<<<<<<< HEAD
           // <div key={movies.id}>
            <h2> {name}</h2>
           // </div>
=======
            <div key={movies.id}>
            <h2> {movies.name}</h2>
            
            </div>
>>>>>>> ac406f724f538b2b259abf65baabb82709309e12
        )
}

<<<<<<< HEAD
=======
} 

>>>>>>> ac406f724f538b2b259abf65baabb82709309e12
export default ComponentDetail
