import listRoutes from './list.mjs'
import express from 'express'
import { addTodo } from './todoStore.mjs'

const routerFactory = () => {
    const router = express.Router()
    router.use('/list', listRoutes());

    router.post('/actions/add', (req, resp) => {
        const body = req.body

        addTodo({
            id: Math.floor(Math.random() * 100),
            content: body.content,
        })

        resp.send('cool')
    })

    return router
}

export default routerFactory
