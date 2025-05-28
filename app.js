const express = require('express')
const logger = require('morgan')
const index = require('./router/index')
const todo = require('./router/todo')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use('/', index)
app.use('/', todo)


app.listen(3000, ()=>{
    console.log('Server started on port 3000!!!')
})
