const express = require("express");
const app = express();
const cors = require("cors");
const trainingController = require("./controllers/training.controller")
const cardController =require("./controllers/card.controller")

app.use(express.json());

app.use(cors())

app.use("/training",trainingController)
app.use("/card",cardController);

module.exports=app;
