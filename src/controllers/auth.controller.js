const User = require("../models/user.model");
const jwtoken = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  return jwtoken.sign({ user }, process.env.SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(500).send("email already exists");
    }

    user = await User.create(req.body);

    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    console.log(req.body.email);
    if (!user) {
      return res.status(400).send("Wrong Email or Password");
    }
    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).send({ message: "Wrong Email or Password" });
    }

    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

module.exports = { register, login, generateToken };
