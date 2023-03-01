//ใช้งาน mongoose
const mongoose = require('mongoose')

//เชื่อมไปที่ mongoDB
const dbUrl = 'mongodb://localhost:27017/movieDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err => console.log(err))

mongoose.set("strictQuery", true);

//ออกแบบ Schema
let movieSchema = mongoose.Schema({
    name :String,
    description :String,
    imagepath :String
})

//สร้าง model
let Movie = mongoose.model("movies",movieSchema)

//ส่งออก model
module.exports = Movie

