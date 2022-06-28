const express = require('express')
const EntryModel = require('./db/entry_model')

const categories = ['Food', 'Coding', 'Work', 'Other']

// const entries = [
//   { category: "Food", entry: "Hello" },
//   { category: "Coding", entry: "Coding is cool!" },
//   { category: "Work", entry: "Just another day at the office" },
// ];

const app = express()
const port = 4000

// app.use tells Express to execute some middleware at this stage
// of the request-response cycle.
// In this case, we're executing express.json(), a middleware that
// does a JSON.parse on the incoming request body, then sets req.body
// to the result so that later middleware (including routes) can access it.
// We do this before any routes, in case a route needs req.body
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ info: 'Journal API' })
})

app.get('/categories', (req, res) => res.send(categories))

app.get("/entries", async (req, res) => {
    const entries = await EntryModel.find()
    res.send(entries)
})

app.get("/entries/:id", async (req, res) => {
    const entry = await EntryModel.findById(req.params.id)
    res.send(entry)
})

app.post("/entries", async (req, res) => {
    const entry = { category: req.body.category, entry: req.body.entry}
    const newEntry = await EntryModel.create(entry)
    res.status(201).send(newEntry)
})

app.listen(port, () => console.log(`App running at http://localhost:${port}/`))
