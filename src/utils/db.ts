// Configuring the databas
import { MONGO_URL } from './../config';
import mongoose from 'mongoose';
const connectMongoDB = async () => {
  try {
    // Connecting to the database
    mongoose.connect(MONGO_URL);

    mongoose.set('debug', true);

    const mongoDb = mongoose.connection;
    mongoDb.on('error', () => {
      console.log(`Unable to connect to mongo database`);
    });

    mongoDb.once('open', () => {
      console.log(`Successfully connected to the mongo database`);
    });
  } catch (err) {
    console.error('Could not connect to the database. Exiting now...:', err);
  }
};

export default connectMongoDB;
