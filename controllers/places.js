const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router