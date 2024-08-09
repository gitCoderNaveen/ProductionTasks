const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    sl: String,
    firmName: String,
    doorNo: Number,  // Changed from Object to Number
    street: String,
    area: String,
    city: String,
    pincode: Number,
    mobile: String,
    product: String
})

const dataModel = mongoose.model('firmdatas', dataSchema)

module.exports=dataModel