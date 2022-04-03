const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors())
const trainingController = require("./controllers/training.controller")
const cardController =require("./controllers/card.controller")
const otpController = require("./controllers/otp.controller")
const {
  register,
  login,
  generateToken,
} = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller")
const passport = require("../src/configs/google.OAuth")


app.get('/', (req, res) => {
  // REDIRECT goes here
  res.redirect('http://127.0.0.1:5502/src/html/index.html')
})
app.use("/training",trainingController)
app.use("/card",cardController);
app.use("/register", register)
app.use("/login", login)
app.use("/users", userController)
app.use("/otp",otpController)

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
