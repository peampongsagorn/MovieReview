ในทางฝั่งของ Back-end
1. app.js ทำหน้าที่ในการสร้าง server โดยการใช้ express โดยให้ทำการรัน server ที่ localhost port 8080 
2. movie.js ในไฟล์นี้จะทำการสร้าง DB ใน mongoDB โดยการใช้ mongoose โดยจะทำการออกแบบ Schema ในตัวแปร movieSchema และทำการนำ Schema ดังกล่าวนั้นมาสร้าง model ให้มีชื่อว่า Movie เพื่อนำข้อมูลใน database ไปใช้งาน 
3. myRouter.js ในไฟล์นี้จะทำหน้าที่ในการติดต่อกับฝั่งของ client โดยจะใช้ router.get ทำหน้าในการรับ path ที่ส่งมาจากฝั่งของ client จากนั้นจะนำค่าพารามิเตอร์ moviename ที่ได้มาจาก path นั้นมากำหนดค่า
   ให้กับตัวแปร movie_name จากนั้นจะนำตัวแปร movie_name ซึ่งเป็นชื่อหนังนั้นไปค้นหาใน database ที่เราได้ทำการสร้างไว้โดยใช้คำสั่ง Movie.findone({name:movie_name}).exec() นั่นคือจะทำการเปรียบเทียบว่ามีชื่อของ name ใน database 
   ที่ตรงกับตัวแปรก movie_name หรือไม่ถ้าหากมีก็จะะทำการนำข้อมูลที่ตรงกันเก็บในตัวแปร doc และทำการส่งข้อมูลดังกล่าวให้กับฝั่งของ client โดยใช้คำสั่ง res.send(JSON.stringfy(doc)) 
