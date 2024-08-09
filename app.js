
import express from 'express'
const app = express()
import bodyParser from 'body-parser'
app.use(bodyParser.json());
import connectDB from './db/connectDB.js'
import web from './routes/web.js'
const port = process.env.PORT || '3000'
const DataBase_Url = process.env.DataBase_Url || 'mongodb://localhost:27017'
connectDB(DataBase_Url)

// Set Template Engine
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));

// Load Routes
app.use('/', web)

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})