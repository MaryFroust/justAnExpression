const { getAllTodos, createNewTodo, updateTodoById, deleteTodoById } = require('./controller/todoController')

// const { getAllTodos, createNewTodo } = require('./controller/todoController')
const router = require('express').Router()

router.get('/get-all-todos',  getAllTodos)
router.post('/create-todo', createNewTodo)
router.put('/update-todo/:id', updateTodoById, )
router.delete('/delete-todo/:id', deleteTodoById)

module.exports = router