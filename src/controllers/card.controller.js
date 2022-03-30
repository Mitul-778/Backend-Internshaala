const express = require("express");
// const { default: mongoose } = require("mongoose");
const router = express.Router();

const card = require("../models/card.model.js");

router.get("/", async (req, res) => {
  try {
    const cards = await card.find({}).lean().exec();
    return res.status(200).send(cards);
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  // req.body.userId= req.user._id
  try {
    const cards = await card.create(req.body);
    return res.status(201).send(cards);
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }
});

module.exports = router;
