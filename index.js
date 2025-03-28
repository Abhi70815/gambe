const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/gameRoute');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected"))
    .catch(err => console.error("Database connection error:", err));

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.set('view engine', 'ejs');

// Routes
app.use(router);

// Home route
app.get('/', (req, res) => {
    res.render('addGame');
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});