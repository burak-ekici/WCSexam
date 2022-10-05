const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
require('./models/dbConfig')
const argonautes = require('./routes/argonautes')
const app = express()


app.use(cors())

app.use(bodyParser.json())

app.use('/argonautes', argonautes)

app.listen(process.env.PORT)