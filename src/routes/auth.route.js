const express = require('express');

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello HR Console'
    });
});

authRouter.post('/login', (req, res) => {
    
});

module.exports = authRouter;