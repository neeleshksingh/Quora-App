const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const askSchema = new Schema({
    ask : {type : String, reauired:true},
    user : {type : ObjectId, ref: 'User'}
})

const Ask = mongoose.model('Ask', askSchema)
module.exports = Ask