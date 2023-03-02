const { exec } = require('child_process')
const express = require('express')
const router = express.Router()
const path = require('path')
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
router.get("/romantic/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    Comment.find({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/comedy/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    Comment.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/fantasy/::name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    Comment.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/kids/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    Comment.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/drama/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    Comment.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.get("/action/:name",(req,res)=>{
    const movie_name = req.params.name
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)    
    })
    Comment.findOne({name:movie_name}).exec((err,doc) => {
        console.log(doc)
    })
    })

router.post('/romantic/:name',(req,res) => {
    let data = new Comment({
        name :req.params.name,
        ment :req.body.comment
    })
    Comment.saveComment(data,(err) => {
        if(err) console.log(err)
        res.redirect("/romantic/:name")
    })
})

router.post('/comedy/:name',(req,res) => {
    let data = new Comment({
        name :req.params.name,
        ment :req.body.comment
    })
    Comment.saveComment(data,(err) => {
        if(err) console.log(err)
        res.redirect("/romantic/:name")
    })
})

router.post('/fantasy/:name',(req,res) => {
    let data = new Comment({
        name :req.params.name,
        ment :req.body.comment
    })
    Comment.saveComment(data,(err) => {
        if(err) console.log(err)
        res.redirect("/romantic/:name")
    })
})

router.post('/kids/:name',(req,res) => {
    let data = new Comment({
        name :req.params.name,
        ment :req.body.comment
    })
    Comment.saveComment(data,(err) => {
        if(err) console.log(err)
        res.redirect("/romantic/:name")
    })
})

router.post('/drama/:name',(req,res) => {
    let data = new Comment({
        name :req.params.name,
        ment :req.body.comment
    })
    Comment.saveComment(data,(err) => {
        if(err) console.log(err)
        res.redirect("/romantic/:name")
    })
})

router.post('/action/:name',(req,res) => {
    let data = new Comment({
        name :req.params.name,
        ment :req.body.comment
    })
    Comment.saveComment(data,(err) => {
        if(err) console.log(err)
        res.redirect("/romantic/:name")
    })
})
module.exports = router