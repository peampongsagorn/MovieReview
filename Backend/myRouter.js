const { exec } = require('child_process')
const express = require('express')
const router = express.Router()
const path = require('path')
//เรียกใช้งานโมเดล
const Movie = require('./movie')

router.get("/",(req,res)=>{
    res.write("hello g")
    res.end()
})

// router.get("/:category/:id",(req,res)=>{
//     res.write("hello g")
//     res.end()
// })
router.get("/romantic/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/comedy/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/fantasy/::name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/kids/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/drama/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/action/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })


module.exports = router