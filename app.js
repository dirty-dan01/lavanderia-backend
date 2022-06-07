const express = require('express')
const bodyparser = require('body-parser')
const routes = require('./routes/PrincipalRoutes')

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


app.use('/api', routes)

app.get('/', (req, res) => {
    res.send("Hello from api");
})

app.listen(port, () => {
    console.log(`Working over port ${port}`)
})