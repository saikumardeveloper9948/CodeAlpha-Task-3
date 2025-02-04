
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://bandisaikumar9948:8QA55wl70FULLHgR@portfolio-queries-clust.7mis3.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};

module.exports = connectDB;
