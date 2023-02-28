const express = require('express')
const app = express()

app.use((req,res)=>{
    res.send("Hello isus")
})

app.listen(3000,() => {
    console.log('start server')
})