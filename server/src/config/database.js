import mongoose from 'mongoose';

const config = process.env;

const { MONGO_URI, DATABASE_NAME } = config;

const db = {};
db.connect = () => {
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
      console.log(`Successfully connected to MongoDB database: ${DATABASE_NAME}`);
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
};
export default db;
