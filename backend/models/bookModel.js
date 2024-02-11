const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please provide a title for the book'],
    },
    author:{
        type: String,
        required: [true, 'Please provide an author']
    },
    publishYear:{
        type: Number,
        required: [true, 'Please provide a publish year']
    },
},{timestamps:true})

module.exports = mongoose.model('book', bookSchema);