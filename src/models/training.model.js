const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Training = mongoose.model("training", trainingSchema);
module.exports = Training;
