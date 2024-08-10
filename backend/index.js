const express = require('express')
const datas = require('./Route/datas')
const mongoose = require('mongoose')
const dataModel = require('./model/data-models')
const cors = require('cors')

const app = express()

const port=process.env.PORT || 7001;
app.use(cors())


mongoose.connection.on('connected', ()=>{
    console.log('MongoDB successfully connectd')
})

app.use('/datas',datas)

app.listen(7001, ()=>{
    console.log('sever is running on port 7001')
})
