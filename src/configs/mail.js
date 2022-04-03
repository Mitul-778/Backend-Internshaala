const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "af499cafd5a089",
    pass: "a089ee849baf58"
  },
});
