const express = require('express')
const createError = require('http-errors')
const path = require('path')

const dirname = path.dirname(__dirname)

const app = express()
const port = 3000

app.set('views', path.join(dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(dirname, 'public')))

app.get('/', (_req, res) => res.render('index'))
app.use((_req, _res, next) => {
    next(createError(404));
  })

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
