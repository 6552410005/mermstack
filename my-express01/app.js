const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Wee Wee Wee</h1>')
})

app.get('/hello', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.get('/thailand/welcome', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

app.get('/hi', (req, res) => {
    res.send('<h1>Hi...</h1>')
})

app.listen(3000, ()=>{
    //คำสั่งเมื่อ server start
    console.log('server starting on port 3000')
})