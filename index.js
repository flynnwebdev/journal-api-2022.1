const express = require('express')

const categories = ['Food', 'Coding', 'Work', 'Other']

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send({ info: 'Journal API' })
})

app.get('/categories', (req, res) => res.send(categories))

app.listen(port, () => console.log(`App running at http://localhost:${port}/`))
