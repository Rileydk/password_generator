// Include files
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

// Define variables
const port = 3000

// Set static files
app.use(express.static('public'))

// Set bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// Set template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Handle request and response
app.get('/', (req, res) => {
  res.render('main')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index')
})

// Start and listen to the server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}.`)
})
