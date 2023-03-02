const express = require('express')
const app = express()
const router = require('./myRouter')

const Movie = require('./movie')


app.use(router)

app.listen(3000,() => {
    console.log('start server')
    // Movie.find().exec((err,doc) => {
    //     console.log(doc)
    // })

})