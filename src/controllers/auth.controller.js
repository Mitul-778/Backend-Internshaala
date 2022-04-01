const User = require("../models/user.model");
// const Admin = require("../models/admin.model");
const jwtoken = require("jsonwebtoken");
const transporter = require("../configs/mail");
require("dotenv").config();

const generateToken = (user) => {
  return jwtoken.sign({ user }, process.env.SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      return res.status(500).send("User already exists");
    }

    user = await User.create(req.body);

    const token = generateToken(user);
    
    transporter.sendMail({
      from: "Internshala",
      to: user.email,
      subject: `Welcome to Internshala ${user.firstName} ${user.lastName}`,
      text: `Hii ${user.firstName}, please confirm your email address`,
      html: `<b>Hii ${user.firstName}, please confirm your email address</b>`,
    });

    return res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
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
