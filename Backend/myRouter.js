const express = require('express')
const router = express.Router()
const path = require('path')
//เรียกใช้งานโมเดล
const Movie = require('./movie')

// router.get("/",(req,res)=>{
//     res.write("hello g")
//     res.end()
// })

// router.get("/:category/:id",(req,res)=>{
//     res.write("hello g")
//     res.end()
// })
router.get("/romantic/:id",(req,res)=>{
    res.write("hello g")
    res.end()
    })

router.get("/comedy/:id",(req,res)=>{
    res.write("hello d")
    res.end()
    })

router.get("/fantasy/:id",(req,res)=>{
    res.write("hello a")
    res.end()
    })

router.get("/kids/:id",(req,res)=>{
    
    })

router.get("/drama/:id",(req,res)=>{
    
    })

router.get("/action/:id",(req,res)=>{
    
    })
   

module.exports = router