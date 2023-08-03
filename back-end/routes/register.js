const express = require('express');
const router = express.Router();

const UserModel = require('./models/userModel')

// Create a route to handle user registration
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Create a new user
    const newUser = new UserModel({ email, password });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
