
const express = require('express');
const router = express.Router();
const UserModel = require('./models/userModel');

router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    console.error('Error getting user information:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;