const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect('mongodb://127.0.0.1:27017/todo-backend')
    .then(() => {
        app.listen(3000, () => {
            console.log("MONGODB CONNECTED.")
            console.log("Server started on port 3000.")
        })

    })