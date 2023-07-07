// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
// What does this do?  When we send data with the POST verb, that data get encryptef for its trip across the internet.  Because it is protected this way in transit, that makes it extra safe for usernames, passwords, and other sensitive data.  However, it also means w will need as extra tool to decrypt that data for us.

// The first argument to app.use, /places sests all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller.

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})
// It is important that this stays at the bottom , other wise it will override your other pages!!!

// Listen for Connections
app.listen(process.env.PORT)