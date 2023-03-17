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
 4. ไฟล์ database.json เป็นไฟล์ที่ได้ทำการ import มาจาก mongoDB เพื่อนำมาใช้เป็นการอ้างอิงของข้อมูลใน mongoDB
 
 
 ฝั่งของ Front-end
 1.ในไฟล์ App.js ทำการ import file ComponentHome เข้ามาเพื่อทำการแสดงหน้า 
 2.ComponentContent มีการใช้ BrowserRouter Routes Route เพื่อใช้ในการทำการ Route path จะมีการ route ไปยังไฟล์ต่างๆ ภายใน frontend ตังอย่างเช่น <Route path="/Romantic" element=            {<Romantic />}/> คือเป็นการบอกว่า ถ้าหาก URL มี path เป็น /Romantic จะให้มีการ render component ชื่อ Romantic เป็นต้น โดยจะมีการแบ่งเป็นหมวดหมู่ ได้แก่ Romantic, Comedy, Fantasy, Kids,    Drama, Actions และนอกจากมีการใช้ Route path ไปยังหมวดหมู่ต่างๆแล้ว ยังมีการ Route path ไปยังหน้าหนังแต่ละเรื่องด้วย ตัวอย่างเช่น <Route path="/Romantic/titanic" element=                    {<TitanicComponent/>}/> คือ ถ้าหาก URL มี path เป็น /Romantic/titanic จะให้มีการ render component ชื่อ TitanicComponent
 3.ComponentTitle เป็นโฟลเดอร์ที่ทำการสร้างไว้เพื่อแบ่งหมวดหมู่ของหนัง มีหน้า Home ไว้สำหรับเลือกหนังต่างๆ ภายในไฟล์ Home.js มีการใช้ NavLink เหมือนกับ Link ต่างกันที่ตัว Navlink สามารถกำหนด active    style ได้ และมีการทำงานคล้ายกับ tag a เอาไว้สำหรับกดไปยังไฟล์หมวดหมู่ที่ต้องการซึ่งจะประกอบไป    ด้วยไฟล์ Romantic.js, Comedy.js, Fantasy.js, Kids.js, Drama.js, Actions.js
 4.ภายในไฟล์หมวดหมู่แต่ละไฟล์จะประกอบไปด้วยหนังทั้งหมด 4 เรื่อง ในแต่ละเรื่องมีรูปแบบการทำงานดังนี้มีส่วนของชื่อ Movie Review และมี NavLink to="/" เพื่อทำการกลับไปยัง path "/" ซึ่งก็คือหน้า Home หน้า    แรก มีส่วนของภาพและชื่อหนังภายในหมวดหมู่ 4 เรื่องโดยที่สามารถกดเข้าไปในภาพหนังนั้น เพื่อทำการเข้าไปยังหน้ารีวิวหนังเรื่องต้องการ ซึ่งจะมีการดึงข้อมูลมาจากทางฝั่ง backend
 
