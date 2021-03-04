const express = require('express')
const app = express()

app.use(express.json())
let books = [] //arry ตั้งแต่0->n-1 << before mongodb


app.get('/books', (req, res) => {
    //input*

    //process*

    //output*
    res.status(200).json(books)
})


app.get('/books/:id', (req, res) =>{
    //input*
    let id = req.params.id
    // console.log(id: ${id}) <<เช็คว่า id ออกมาไหม
     let book = {} //<<ประกาศเป็น object << before mongodb

    //process*
    // movie = movies[id] << before

    //output*
    res.status(200).json(book)

})
//POST /movies
//npm install --save-prod express <<ติดตั้ง express แบบ production
//npm install --save-dev nodemon <<ติดตั้ง nodemon แบบ development dependency << restart server ให้ auto ไม่ต้องทำเอง
//npm install --save-prod mongodb
//npm init -y
// เรียกใช้ nodemon index.js
// << npm run dev ใช้ run dev ที่กำหนดใน package.json

app.post('/books', (req, res) => { //<<แอโร่ function

    //input*
    let newtitle = req.body.title //<<ตรง.title กำหนดเองชื่ออื่นได้ 
    let newprice = req.body.price 
    let newunit = req.body.unit 
    let newisbn = req.body.isbn 
    let newimageurl = req.body.imageurl 

    let newBook = {
        title: newtitle, //key:value
        price: newprice,
        unit: newunit,
        isbn: newisbn,
        imageurl: newimageurl,
    }
    let bookID = 0

    //process*

   books.push(newBook) //<<insert ต่อท้ายไปเรื่อยๆ << before mongodb
   bookID = books.length - 1 //<< before mongodb

    //output*

    res.status(201).json(bookID)
})

const port = 3000
app.listen(port, () => console.log(`Server started again at ${port}`))