const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile('./views/home.html',{root:'.'})
})

router.get('/about', (req, res) => {
    res.sendFile('./views/about.html',{root:'.'})
})

router.get('/service', (req, res) => {
    res.sendFile('./views/service.html',{root:'.'})
})

router.get('/student/blog', (req, res) => {
    res.sendFile('./views/blog.html',{root:'.'})
})

module.exports = router