const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const todoRouter = require('./routes/Todo/todoRouter')
// const index = require('./routes/index')




const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.use('/api/todo', todoRouter)

// app.use('/', index)


module.exports = app

