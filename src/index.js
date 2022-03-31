const express = require("express");
const app = express();
const cors = require("cors");
const trainingController = require("./controllers/training.controller")
const cardController =require("./controllers/card.controller")
const passport = require("../src/configs/google.OAuth")

app.use(express.json());

app.use(cors())

app.use("/training",trainingController)
app.use("/card",cardController);

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
      successRedirect:"http://127.0.0.1:5501/src/html/card.html",
      session: false,
    }),
    function (req, res) {
      const token = generateToken(req.user);
      return res.status(200).send({ user: req.user, token });
    }
  );

module.exports=app;
