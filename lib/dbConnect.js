import mongoose from 'mongoose';

/**
 * Global MongoDB connection
 */
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable in .env.local'
  );
}

/**
 * Global is used here to maintain the connection across hot reloads
 * in development. This prevents multiple connections being created.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB
 * @returns {Promise<Mongoose>} A promise that resolves with the Mongoose connection
 */
async function dbConnect() {
  if (cached.conn) {
    console.log('Using existing MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log('Creating new MongoDB connection');
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  
  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    console.error('MongoDB connection error:', e);
    return null;
  }
}

export default dbConnect;
