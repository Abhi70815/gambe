const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Corrected from 'require' to 'required'
        unique: true
    },
    category: {
        type: String,
        required: true, // Corrected from 'require' to 'required'
        // Consider removing unique if you want to allow multiple games in the same category
    },
    image: {
        type: String,
        required: true, // Corrected from 'require' to 'required'
        unique:true
    },
    url: { // Changed 'Url' to 'url' for consistency
        type: String,
        required: true, // Corrected from 'require' to 'required'
        unique: true
    }
}, { timestamps: true });

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;