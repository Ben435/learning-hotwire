import listRoutes from './list.mjs'
import express from 'express'
import { addTodo, getTodos } from './todoStore.mjs'

const routerFactory = () => {
    const router = express.Router()
    router.use('/list', listRoutes());

    router.post('/actions/add', (req, res) => {
        const body = req.body

        addTodo({
            id: Math.floor(Math.random() * 100),
            content: body.content,
        })

        return res.render('todo-list/index', { todos: getTodos() })
    })

    return router
}

export default routerFactory
