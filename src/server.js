const express = require('express');

const { connectMongoDB } = require('./utils/mongodb');

require('dotenv').config();

const app = require('./app');

const server = express();
server.use(app);

const initServer = async () => {
    await connectMongoDB();

    server.listen(process.env.PORT, () => {
        console.log('HR Console API Started.');
    });
};

initServer();