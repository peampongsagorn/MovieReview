import React, { useState } from "react"
import axios from 'axios'

function MovieDetail(){
    axios.get('http://localhost:8080/', { crossdomain: true})
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imagepath, setImagapath] = useState("");
    const [comment, setComment] = useState("");

    // function getMovieDetail(){
    //     axios.get('http://localhost:8080/', { crossdomain: true})
    //     .then(response => {
    //         setName(response.data.name);
    //         setDescription(response.data.description);
    //         setImagapath(response.data.imagepath);
    //         setComment(response.data.comment);
    //     })
    // }
}

