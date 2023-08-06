const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const UserModel = require("./models/userModel");

router.post('/',async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.json({ error: "Email already registered!" });
    } else if (!name || !email || !password) {
      return res.json({ error: "You must fill all fields" });
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);

      const newUser = new UserModel({
        name,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      console.log('Response:', { message: "New user created", user: newUser });

      return res.json({ message: "New user created", user: newUser });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Server error" });
  }
})


module.exports = router;
