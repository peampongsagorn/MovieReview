ในทางฝั่งของ Back-end
1. app.js ทำหน้าที่ในการสร้าง server โดยการใช้ express โดยให้ทำการรัน server ที่ localhost port 8080 
2. movie.js ในไฟล์นี้จะทำการสร้าง DB ใน mongoDB โดยการใช้ mongoose ซึ่งใช้คำสั่ง mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true}) 
    โดยจะประกอบไปด้วยพารามิเตอร์ dbUrl: คือ URL ของฐานข้อมูล MongoDB ที่ต้องการเชื่อมต่อ 
    useNewUrlParser: เป็นการแนะนำให้ใช้โค้ดประเภทใหม่ในการเชื่อมต่อฐานข้อมูล MongoDB โดยใช้ MongoClient.connect() ซึ่งจะช่วยให้โค้ดของเราทำงานได้กับ MongoDB ที่มีการอัพเดตใหม่
    useUnifiedTopology: เป็นการแนะนำให้ใช้โค้ดประเภทใหม่ในการเชื่อมต่อฐานข้อมูล MongoDB โดยใช้ MongoClient.connect() ซึ่งจะช่วยให้เราเชื่อมต่อ MongoDB ได้อย่างปลอดภัยและเร็วขึ้น
   จากนั้นจะทำการออกแบบ Schema ในตัวแปร movieSchema และทำการนำ Schema ดังกล่าวนั้นมาสร้าง model ให้มีชื่อว่า      Movie เพื่อนำข้อมูล    ใน database ไปใช้งาน ใน Shema ของข้อมูลหนัง 1เรื่องนั้นจะ    ประกอบไปด้วย name: String, description: String, imagepath: String 
3. myRouter.js ในไฟล์นี้จะทำหน้าที่ในการติดต่อกับฝั่งของ client โดยจะใช้ router.get ทำหน้าในการรับ path ที่ส่งมาจากฝั่งของ client จากนั้นจะนำค่าพารามิเตอร์ moviename ที่ได้มาจาก path นั้นมากำหนดค่า
   ให้กับตัวแปร movie_name จากนั้นจะนำตัวแปร movie_name ซึ่งเป็นชื่อหนังนั้นไปค้นหาใน database ที่เราได้ทำการสร้างไว้โดยใช้คำสั่ง Movie.findone({name:movie_name}).exec() นั่นคือจะทำการเปรียบเทียบว่า    มีชื่อของ name ใน database ที่ตรงกับตัวแปรก movie_name หรือไม่ถ้าหากมีก็จะะทำการนำข้อมูลที่ตรงกันเก็บในตัวแปร doc และทำการส่งข้อมูลดังกล่าวให้กับฝั่งของ client โดยใช้คำสั่ง                            res.send(JSON.stringfy(doc)) การทำงานของคำสั่งดังกล่าว คือ นำ Object ที่ชื่อว่า doc ที่ถูกสร้างขึ้นมาก่อนหน้า และทำการแปลงเป็นสตริงในรูปแบบ JSON โดยใช้เมธอด JSON.stringify() 
   จากนั้นนสตริง JSON ที่ได้มาใส่เป็นพารามิเตอร์ของเมธอด res.send() เพื่อส่งข้อมูลออกไปยัง client ที่ได้ทำการเรียก API นี้ โดยในส่วนของ router.get นั้นจะใช้ทั้งหมด 6 ตัว สำหรับประเภทหนังที่แตกต่างกัน      ทั้งหมด 6 ประเภท
   res.header("Access-Control-Allow-Origin", "*"); ใช้กำหนดให้ server สามารถตอบกลับข้อมูลได้ในทุกๆ domain โดยใช้เครื่องหมาย * ในการระบุว่าทุก domain สามารถเข้าถึง API นี้ได้
   res.header("Content-Type",'application/json') กำหนดว่า response ที่จะส่งกลับไปยัง client จะมีหัวเรื่องชื่อ "Content-Type" ซึ่งเป็น header ใช้บอกประเภทของเนื้อหาที่จะส่งกลับไปยัง client        โดย value ของ header นี้จะเป็น "application/json" นั่นคือเนื้อหาของ response จะเป็นข้อมูลในรูปแบบ JSON ซึ่งเป็นรูปแบบสำหรับการแลกเปลี่ยนข้อมูลระหว่างแอปพลิเคชันต่าง ๆ ในรูปแบบของ                ข้อความ (text)
  
 4. 
