const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const Training = require("../models/training.model");

router.get("", async (req, res) => {
  try {
    const trainings = await Training.find({}).lean().exec();
    return res.status(200).send(trainings);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("", async (req, res) => {
  try {
    const training = await Training.create(req.body);
    return res.status(201).send(training);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const training = await Training.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send(training);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const training = await Training.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(training);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
