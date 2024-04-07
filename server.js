// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Route to handle POST requests to '/join'
app.post('/join', (req, res) => {
    const { username, email } = req.body;
    // Simulate broken process if username or email is missing
    if (!username || !email) {
        res.status(400).json({ error: 'Username and email are required' });
    } else {
        // Process user data (e.g., save to database)
        res.status(200).json({ message: 'Join process successful' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});

module.exports = app; // Export the Express app for testing purposes
