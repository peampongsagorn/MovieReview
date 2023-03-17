const { exec } = require('child_process')
const express = require('express')
const router = express.Router()
const Movie = require('./movie')
const Comment = require('./comment')

router.get("/",(req,res)=>{
    res.write("hello g")
    res.end()
})

router.get("/Romantic/:movieName",(req,res)=>{
    const movie_name = req.params.movieName;
    console.log(movie_name)
    Movie.findOne({name:movie_name}).exec((err,doc) => {
        res.header("Access-Control-Allow-Origin", "*"); // ระบุโดเมนของ frontend ที่เรียกใช้ API ได้ทุกๆ โดเมน
        res.header("Content-Type",'application/json')
        res.send(JSON.stringify(doc))
        res.end()
    })
})


    // router.get("/Romantic/titanic",(req,res)=>{
    //     const movie_name = 'titanic'
    //     res.write("titanic")
        
    //     console.log(movie_name)
    //     Movie.findOne({name:movie_name}).exec((err,doc) => {
    //         res.header("Access-Control-Allow-Origin", "*"); // ระบุโดเมนของ frontend ที่เรียกใช้ API ได้ทุกๆ โดเมน
    //         res.header("Content-Type",'application/json')       
    //         res.send(JSON.stringify(doc))
    //         res.end()
    //     })
    // })

    // router.get("/Romantic/เธอกับฉันกับฉัน",(req,res)=>{
    //     const movie_name = 'เธอกับฉันกับฉัน'
    //     res.write("titanic")
    //     console.log(movie_name)
    //     Movie.findOne({name:movie_name}).exec((err,doc) => {
    //         res.header("Access-Control-Allow-Origin", "*"); // ระบุโดเมนของ frontend ที่เรียกใช้ API ได้ทุกๆ โดเมน
    //         res.header("Content-Type",'application/json')
    //         res.send(JSON.stringify(doc))
    //         res.end()
    //     })
    // })
//ใช้ถึงนี่
// router.get("/Comedy/:name",(req,res)=>{
//     const movie_name = decodeURIComponent(req.params.name)
//     console.log(movie_name)
//     Movie.findOne({name:movie_name}).exec((err,doc) => {
//         res.json(doc)
//         console.log(doc)
//     })
// })

// router.get("/Fantasy/:name",(req,res)=>{
//     const movie_name = req.params.name
//     console.log(movie_name)
//     Movie.findOne({name:movie_name}).exec((err,doc) => {
//         res.json(doc)
//         console.log(doc)
//     })
//  })

// router.get("/Kids/:name",(req,res)=>{
//     const movie_name = req.params.name
//     console.log(movie_name)
//     Movie.findOne({name:movie_name}).exec((err,doc) => {
//         res.json(doc)
//         console.log(doc)
//     })
// })

// router.get("/Drama/:name",(req,res)=>{
//     const movie_name = req.params.name
//     console.log(movie_name)
//     Movie.findOne({name:movie_name}).exec((err,doc) => {
//         res.json(doc)
//         console.log(doc)
//     })
// })

// router.get("/Action/:name",(req,res)=>{
//     const movie_name = req.params.name
//     console.log(movie_name)
//     Movie.findOne({name:movie_name}).exec((err,doc) => {
//         res.json(doc)
//         console.log(doc)    
//     })
// })


module.exports = router