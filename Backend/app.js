const express = require('express');
const app = express();
const router = require('./myRouter');
const Movie = require('./movie');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-requested-With, Content-Type, Accept');
    next();
})
app.use(router)

app.listen(8080,() => {
    console.log('start server')


})