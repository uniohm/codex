const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const app = express()

app.use(express.json())



const uri = 'mongodb://superadmin:14511451@cluster0-shard-00-00.2xwft.mongodb.net:27017,cluster0-shard-00-01.2xwft.mongodb.net:27017,cluster0-shard-00-02.2xwft.mongodb.net:27017/buflix?ssl=true&replicaSet=atlas-50w25z-shard-0&authSource=admin&retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true})
let db, moviesCollection

async function connect() {
    await client.connect()
     db = client.db('buflix')
     moviesCollection = db.collection('movies')
}
connect()



app.get('/movies', async (req, res) => {
 
})
app.get('/movies/:id', async (req, res) => {
    let id = req.params.id
    const movie = await moviesCollection.findOne({ _id: ObjectId(id) })
    res.status(200).json(movie)
})
// 
app.post('/movies', async (req, res) => {
    // input
    let newTitle = req.body.title
    let newPlot  = req.body.plot
    let newGenres = req.body.genres
    let newCreators = req.body.creators
    let newStars = req.body.stars
    let newRating = req.body.rating


    let newMovie = {
        title: newTitle,
        plot: newPlot,
        genres: newGenres,
        creators: newCreators,
        stars: newStars,
        rating: newRating
    }
    let movieID = 0
   
    // process
    const result = await moviesCollection.insertOne(newMovie)
    //movies.push(newMovie)
    // n-1
   // movieID = movies.length - 1
   movieID = result.insertedId
    // output
    res.status(201).json(movieID)
})
const port = 3000
app.listen(port, () => console.log(`Server started again at ${port}`))