const express = require("express");

const User = require("../Models/user.model");
const Admin = require("../Models/admin.model");

const router = express.Router();

const transporter = require("../configs/mail");

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(500).send({ users });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);

    transporter.sendMail({
      from: "Internshala",
      to: user.email,
      subject: `Welcome to Internshala ${user.firstName} ${user.lastName}`,
      text: `Hii ${user.firstName}, please confirm your email address`,
      html: `<b>Hii ${user.firstName}, please confirm your email address</b>`,
    });

    const admin = await Admin.find().lean().exec();

    admin.forEach((el) => {
      setTimeout(function () {
        transporter.sendMail({
          from: "Internshala",
          to: el.email,
          subject: `${user.firstName} ${user.lastName} has registered with us`,
          text: `Please welcome ${user.firstName}`,
          html: `<b>Please welcome ${user.firstName}`,
        });
      }, 5000);
    });
    return res.status(201).send({ user, message: "Mail sent successfully" });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
