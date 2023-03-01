const express = require('express')
const app = express()
const router = require('./myRouter')


app.use(router)

app.listen(3000,() => {
    console.log('start server')
})