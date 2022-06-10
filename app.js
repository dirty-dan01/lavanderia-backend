const express = require('express')
const bodyparser = require('body-parser')
const routes = require('./routes/PrincipalRoutes')
const cors = require('cors')

const app = express()
const port = 3000

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

app.options("*", cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use('/api', routes)

app.get('/', (req, res) => {
    res.send("Hello from api");
})

app.listen(port, () => {
    console.log(`Working over port ${port}`)
})