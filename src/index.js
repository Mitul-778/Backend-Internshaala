const express = require("express");
const app = express();
const cors = require("cors");
const trainingController = require("./controllers/training.controller")

app.use(express.json());

app.use(cors())

app.use("/training",trainingController)

module.exports=app;
