
const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


const createUser = async (req, res) => {
    console.log(req.body)
  const { name, email, phone, description } = req.body;
 const phonenumber=Number(phone)
  if (!name || !email || !phonenumber) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  try {
    const newUser = new User({
      name,
      email,
      phone:phonenumber,
      description,
    });

    await newUser.save();
    res.status(201).json(newUser); 
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
