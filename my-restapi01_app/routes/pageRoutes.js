//จัดการเส้นทางไปยังหน้าจอต่างๆ
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile('/views/home.html',{root:'.'})
})

router.get('/about', (req, res) => {
    res.sendFile('/views/about.html',{root:'.'})
})

module.exports = router