// src/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use your MongoDB Atlas connection string from the snippet
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverApi: { version: '1', strict: true, deprecationErrors: true }
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;