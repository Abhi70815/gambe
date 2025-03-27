const mongoose = require('mongoose')

const gameSchma = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true,
    },
    Url:{
        type:String,
        require:true
    }
},{timestamps:true})

const Game = mongoose.model('Game',gameSchma);

module.exports=Game;

