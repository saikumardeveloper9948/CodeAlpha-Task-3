const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone:{ type: Number, required: true },
  description : { type: String },

});

module.exports = mongoose.model('User', userSchema);