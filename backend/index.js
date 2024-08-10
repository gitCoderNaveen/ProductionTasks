const express = require('express')
const datas = require('./Route/datas')
const mongoose = require('mongoose')
const dataModel = require('./model/data-models')
const cors = require('cors')

const app = express()

app.use(cors({
    origin:['http://deploy-mern-1whq.vercel.app'],
    methods:['POST','GET'],
    credentials:true
}))

mongoose.connect('mongodb+srv://naveenbscmca1518:product@2024@cluster0.cfshq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB successfully connectd')
})

app.use('/datas',datas)

app.listen(7001, ()=>{
    console.log('sever is running on port 7001')
})