const Todo = require('../model/Todo')


const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.json({ message: "Todos Found", payload: todos })
    } catch (error) {
        res.status(500).json({ message: "Error while fetching todos.", error: error.message })
    }
}

const createNewTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            text: req.body.text
        })
        await newTodo.save()
        res.json({ message: "Todo Created.", payload: newTodo })

    } catch (error) {
        res.status(500).json({ message: "Error while creating todos.", error: error.message })
    }
}

const updateTodoById = async (req, res) => {
    try {
        const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        
        res.json({ message: "Todo Updated.", payload: updateTodo })
    } catch (error) {
        res.status(500).json({ message: "Error while updating todos.", error: error.message })
    }
}

const deleteTodoById = async (req, res) => {
    try {
      const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
      res.json({message: "Todo Deleted.", payload: deletedTodo})
    } catch (error) {
        res.status(500).json({ message: "Error while deleting todos.", error: error.message })
    }
}


module.exports = {
    getAllTodos,
    createNewTodo,
    updateTodoById,
    deleteTodoById
}