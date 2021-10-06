import express from 'express'
import { getTodos } from './todoStore.mjs'

const routerFactory = () => {
    const router = express.Router()
    router.get('/', (_req, res) => {
        return res.render('todo-list/index', { todos: getTodos() })
    });

    return router
}

export default routerFactory
