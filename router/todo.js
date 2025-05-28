const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid').v4


let todos = [
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
    const id = req.query.id
    const foundTodo = todos.find(todo => todo.id === id)
    if (foundTodo) {
        return res.json({ message: "TOdo found!", payload: foundTodo })
    } else {
        return res.json({ message: "The Todo ID you are looking for does not exist, please check the ID" })
    }
})

router.get('/get-todos-by-done/:done', (req, res) => {
    let undoneArr = []
    let doneArr = []
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].done === req.params.done && todos[i].done  === false) {
            undoneArr.push(todos[i])
            return res.json(undoneArr)
        } else {
            if (todos[i].done === req.params.done && todos[i].done=== true) {
                doneArr.push(todos[i])
                return res.json(doneArr)
            }
        }
    }
})

router.post('/create-new-todo', (req, res) => {
    const todoList = req.body.todos
    const newTodo = {
        todo: todoList,
        done: 'false',
        id: uuidv4
    }
    todos.push(newTodo)
    return res.json({ message: 'New todo created', payload: todos })
})

module.exports = router