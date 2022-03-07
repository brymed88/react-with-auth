const mongoose = require("mongoose");
const { log } = require("./logger");
require('dotenv').config();

const { MONGO_URI, DATABASE_NAME } = process.env;
exports.connect = () => {
    // Connecting to the database
    mongoose
        .connect(MONGO_URI + DATABASE_NAME, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6
        })
        .then(() => {
            log.info("Successfully connected to database");
        })
        .catch((error) => {
            log.error("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};