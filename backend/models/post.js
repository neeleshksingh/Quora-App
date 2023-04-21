const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types

const postSchema = new Schema({
    heading: { type: String, required: true },
    content: { type: String, reauired: true },
    img: { type: String },
    user: { type: ObjectId, ref: 'User' }
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post