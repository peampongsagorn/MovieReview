const { exec } = require('child_process')
const express = require('express')
const router = express.Router()
const Movie = require('./movie')
const Comment = require('./comment')



router.get("/Romantic/:movieName",(req,res)=>{
    const movie_name = req.params.movieName;
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Content-Type",'application/json')
        res.send(JSON.stringify(doc))
        res.end()
    })
})

router.get("/Drama/:movieName",(req,res)=>{
    const movie_name = req.params.movieName;
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.header("Access-Control-Allow-Origin", "*"); // ระบุโดเมนของ frontend ที่เรียกใช้ API ได้ทุกๆ โดเมน
        res.header("Content-Type",'application/json')
        res.send(JSON.stringify(doc))
        res.end()
    })
})

router.get("/Comedy/:movieName",(req,res)=>{
    const movie_name = req.params.movieName;
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.header("Access-Control-Allow-Origin", "*"); // ระบุโดเมนของ frontend ที่เรียกใช้ API ได้ทุกๆ โดเมน
        res.header("Content-Type",'application/json')
        res.send(JSON.stringify(doc))
        res.end()
    })
})

router.get("/Fantasy/:movieName",(req,res)=>{
    const movie_name = req.params.movieName;
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.header("Access-Control-Allow-Origin", "*"); // ระบุโดเมนของ frontend ที่เรียกใช้ API ได้ทุกๆ โดเมน
        res.header("Content-Type",'application/json')
        res.send(JSON.stringify(doc))
        res.end()
    })
})

router.get("/Actions/:movieName",(req,res)=>{
    const movie_name = req.params.movieName;
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.header("Access-Control-Allow-Origin", "*"); // ระบุโดเมนของ frontend ที่เรียกใช้ API ได้ทุกๆ โดเมน
        res.header("Content-Type",'application/json')
        res.send(JSON.stringify(doc))
        res.end()
    })
})

router.get("/Kids/:movieName",(req,res)=>{
    const movie_name = req.params.movieName;
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.header("Access-Control-Allow-Origin", "*"); // ระบุโดเมนของ frontend ที่เรียกใช้ API ได้ทุกๆ โดเมน
        res.header("Content-Type",'application/json')
        res.send(JSON.stringify(doc))
        res.end()
    })
})





module.exports = router