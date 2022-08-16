const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

module.exports =  mongoose.model("Todo", todoSchema)