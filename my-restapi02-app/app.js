const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const body_payser = require('body-parser');

require('dotenv').config()

const pageRoutes = require('./routes/pageRoutes');
const productRoute = require('./routes/productRoute');
const customerRoute = require('./routes/customerRoute');

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(body_payser.json())
app.use(express.json())
app.use('/',pageRoutes)
app.use('/product',productRoute)
app.use('/customer',customerRoute)

mongoose.connect('mongodb://127.0.0.1:27017/saushopdb').then(
    ()=>{
        console.log('Database connected.....');
    },
    (error)=>{
        console.log('Error Database connection!');
    }
)

app.listen(PORT, ()=>{
    //คำสั่งเมื่อ server start
    console.log('server starting on port ' + PORT)
    console.log('DONE!')
})