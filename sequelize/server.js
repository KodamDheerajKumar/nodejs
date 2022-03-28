const express = require('express');
const cors = require('cors');

const app = express()

var corOptions = {
    origin : 'https://localhost:5000'
}


// middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


//routers 
const router = require('./routes/prodersRouter');
app.use('/api',router)


//testing API
app.get('/', (req,res) => {
    res.json({message: 'Hellooo from api'})
})

//port

const PORT = process.env.PORT || 5000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})