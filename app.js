const express = require('express');

const app = express();

app.use(express.json());

// Homepage
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to my Node.js Docker application!',
        status: 'running'
    });
});

// About endpoint
app.get('/about', (req, res) => {
    res.status(200).json({
        application: 'Node.js Docker Demo',
        framework: 'Express',
        version: '1.0.0'
    });
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy'
    });
});

// POST endpoint
app.post('/message', (req, res) => {
    const message = req.body.message;

    if (!message) {
        return res.status(400).json({
            error: 'Message is required'
        });
    }

    res.status(201).json({
        received: message
    });
});

module.exports = app;

