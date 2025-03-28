const express = require('express');
const router = express.Router();
const Game = require('../model/gameModel');

// Route to add a game
router.post('/addgame', async (req, res) => {
    try {
        const { name, image, category, url } = req.body;
        console.log(!name)

        // Validate input
        

        // Create and save the game
        const game = new Game({ name, image, category, url });
        await game.save();

        res.status(201).json({ message: "Game added successfully", game });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error",err:err.message });
    }
});

// Route to get all games
router.get('/games', async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;