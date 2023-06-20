const mongoose = require('mongoose');

require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connection.once('connected', () => {
    console.log('HR Console MongoDB is Ready.');
});

mongoose.connection.on('error', () => {
    console.error(err);
});

const connectMongoDB = async () => {
    return await mongoose.connect(MONGODB_URI);
};

const disconnectMongoDB = async () => {
    return await mongoose.disconnect();
}

module.exports = {
    connectMongoDB,
    disconnectMongoDB
};