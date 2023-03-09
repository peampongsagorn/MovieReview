const { exec } = require('child_process')
const express = require('express')
const router = express.Router()
//const path = require('path')
//เรียกใช้งานโมเดล
const Movie = require('./movie')
const Comment = require('./comment')

router.get("/",(req,res)=>{
    res.write("hello g")
    res.end()
})

// router.get("/:category/:id",(req,res)=>{
//     res.write("hello g")
//     res.end()
// })

router.get("/Kids/BigHero6",(req,res)=>{
    res.write("hello g")
    res.end()
})

router.get("/Romantic/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.json(doc)
        console.log(doc)
    })
    // Comment.find({name:movie_name}).exec((err,doc) => {
    //     res.json(doc)
    //     console.log(doc)
    // })
    })

    router.get("/Romantic/titanic",(req,res)=>{
        const movie_name = 'titanic'
        res.write("titanic")
        res.end()
        console.log(movie_name)
        Movie.findOne({name:movie_name}).exec((err,doc) => {
            res.json(doc)
            console.log(doc)
        })
        // Comment.find({name:movie_name}).exec((err,doc) => {
        //     res.json(doc)
        //     console.log(doc)
        // })
    })
router.get("/Comedy/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.json(doc)
        console.log(doc)
    })
    // Comment.findOne({name:movie_name}).exec((err,doc) => {
    //     console.log(doc)
    // })
    })

router.get("/Fantasy/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.json(doc)
        console.log(doc)
    })
    // Comment.findOne({name:movie_name}).exec((err,doc) => {
    //     console.log(doc)
    // })
    })

router.get("/Kids/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.json(doc)
        console.log(doc)
    })
    // Comment.findOne({name:movie_name}).exec((err,doc) => {
    //     console.log(doc)
    // })
    })

router.get("/Drama/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.json(doc)
        console.log(doc)
    })
    // Comment.findOne({name:movie_name}).exec((err,doc) => {
    //     console.log(doc)
    // })
    })

router.get("/Action/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.json(doc)
        console.log(doc)    
    })
    // Comment.findOne({name:movie_name}).exec((err,doc) => {
    //     console.log(doc)
    // })
    })

// router.post('/Romantic/:name',(req,res) => {
//     let data = new Comment({
//         name :req.params.name,
//         ment :req.body.comment
//     })
//     Comment.saveComment(data,(err) => {
//         if(err) console.log(err)
//         res.redirect("/Romantic/:name")
//     })
// })

// router.post('/Comedy/:name',(req,res) => {
//     let data = new Comment({
//         name :req.params.name,
//         ment :req.body.comment
//     })
//     Comment.saveComment(data,(err) => {
//         if(err) console.log(err)
//         res.redirect("/Comedy/:name")
//     })
// })

// router.post('/Fantasy/:name',(req,res) => {
//     let data = new Comment({
//         name :req.params.name,
//         ment :req.body.comment
//     })
//     Comment.saveComment(data,(err) => {
//         if(err) console.log(err)
//         res.redirect("/Fantasy/:name")
//     })
// })

// router.post('/Kids/:name',(req,res) => {
//     let data = new Comment({
//         name :req.params.name,
//         ment :req.body.comment
//     })
//     Comment.saveComment(data,(err) => {
//         if(err) console.log(err)
//         res.redirect("/Kids/:name")
//     })
// })

// router.post('/Drama/:name',(req,res) => {
//     let data = new Comment({
//         name :req.params.name,
//         ment :req.body.comment
//     })
//     Comment.saveComment(data,(err) => {
//         if(err) console.log(err)
//         res.redirect("/Drama/:name")
//     })
// })

// router.post('/Action/:name',(req,res) => {
//     let data = new Comment({
//         name :req.params.name,
//         ment :req.body.comment
//     })
//     Comment.saveComment(data,(err) => {
//         if(err) console.log(err)
//         res.redirect("/Action/:name")
//     })
// })
module.exports = router