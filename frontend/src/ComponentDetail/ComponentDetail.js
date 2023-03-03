import React, { useEffect, useState } from "react"
import axios from 'axios'
//import { movie } from "../../../Backend/myrouter";

// function RomanticDetail(){
//     axios.get('http://localhost:8080/Romantic/:name', { crossdomain: true})
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [imagepath, setImagapath] = useState("");
//     const [comment, setComment] = useState("");

//     function getMovieDetail(){
//         axios.get('http://localhost:8080/Romantic/:name', { crossdomain: true})
//         .then(response => {
//             setName(response.data.name);
//             setDescription(response.data.description);
//             setImagapath(response.data.imagepath);
//             setComment(response.data.comment);
//         })
//     }
// }

const movies = axios.create({
    baseURL: "http://localhost:8080/Romantic/:name"
})

const App = () => {
    const [movies, setMovie] = useState([]);
    // const [description, setDescription] = useState("");
    // const [imagepath, setImagapath] = useState("");
    // const [comment, setComment] = useState("");

    useEffect(() => {
        movies.get('?_limit=10', { crossdomain: true})
                .then((response) => {
                    setMovie(response.data);
                    // setDescription(response.data.description);
                    // setImagapath(response.data.imagepath);
                    // setComment(response.data.comment);
    })
            },[])
} 
return(
    
            <div key={movie.id}>
            <h2> {post.name}</h2>
            </div>
        )


