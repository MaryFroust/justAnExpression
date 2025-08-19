const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid').v4


const todos = [
    {
        id: "haf24jd",
        todo: "do laundry",
        done: "false"
    },
    {
        id: "jp2nkl2",
        todo: "wash dishes",
        done: "true"
    }
]

router.get('/get-all-todos', (req, res) => {
    res.json(todos)
})

router.get('/get-todo-by-id/:id', (req, res) => {
    // const id = req.params.id
    const foundTodo = todos.find(item => item.id === req.params.id)
    if (foundTodo) {
        return res.json({ message: "Todo found!", payload: foundTodo })
    } else {
        return res.json({ message: "The Todo ID you are looking for does not exist, please check the ID" })
    }
})

router.get('/get-todos-by-done/:done', (req, res) => {
    // let undoneArr = []
    const newTodoArr = []
    const isDone = req.params.done
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].done === isDone) {
            newTodoArr.push(todos[i])
        }
    }
    res.json({ message: "Found Todos", payload: newTodoArr })
})

router.post('/create-new-todo', (req, res) => {
    if (todos.find(item => item.todo.toLowerCase() === req.body.todo.toLowerCase())) {
        res.json({ message: "Todo already exists." })
    } else {
        const newTodo = {// const todoList = req.body.todos
            todo: req.body.todo,
            done: 'false',
            id: uuidv4()
        }
        todos.push(newTodo)
         res.json(todos)
    }
})

router.put('/update-todo/:id', (req, res)=>{
    const id = req.params.id
    const todo = req.body.todo

    const foundTodo = todos.find(item => item.id === req.params.id)
    foundTodo.todo = todo
    res.json(todos)
})

router.delete('/delete-todo', (req, res)=>{
    const id = req.params.id
    const foundIndex = todos.findIndex(item => item.id === id)
    const removedTodo = todos.splice(foundIndex, 1)
   
    
    res.json({message: "Todo Deleted.", payload: removedTodo })
})


module.exports = router