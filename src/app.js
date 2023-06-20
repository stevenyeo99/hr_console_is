const express = require('express');

// HR Console Router
const AuthRouter = require('./routes/auth.route');

const app = express();

app.use('/auth', AuthRouter);

module.exports = app;