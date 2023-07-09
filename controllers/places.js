const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router