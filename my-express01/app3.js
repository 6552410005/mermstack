const express = require('express')
const routepages = require('./routes/routepages');

const app = express()

app.use('/', routepages)

app.listen(3000, ()=>{
    //คำสั่งเมื่อ server start
    console.log('server starting on port 3000')
})