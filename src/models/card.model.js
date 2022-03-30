<<<<<<< Updated upstream
const mongoose = require("mongoose");
=======
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    starting: { type: String, required: true },
    duration: { type: String, required: true },
    stipend: { type: String, required: true },
    joining: { type: String, required: true },
    working_hours: { type: String, required: true },
    internship: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("cards", cardSchema);
>>>>>>> Stashed changes
