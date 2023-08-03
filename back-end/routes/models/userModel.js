const mongoose = require('mongoose');

// Create a User schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('UserModel', userSchema);