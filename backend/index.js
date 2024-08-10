const express = require('express')
const datas = require('./Route/datas')
const mongoose = require('mongoose')
const dataModel = require('./model/data-models')
const cors = require('cors')

const app = express()

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/ProductDirectory')

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB successfully connectd')
})

app.use('/datas',datas)

app.listen(7001, ()=>{
    console.log('sever is running on port 7001')
})
