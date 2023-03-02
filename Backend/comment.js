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

let commentSchema = mongoose.Schema({
    name :String,
    ment :String
})

//สร้าง model

let Comment = mongoose.model("comments",commentSchema)
//ส่งออก model
module.exports = Comment

//module.exports = Comment

//ออกแบบฟังก์ชันบันทึกข้อมูล
module.exports.saveComment=function(model,data){
    model.save(data)
}

