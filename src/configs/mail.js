const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "a935c77f6637f2",
    pass: "ea588ded08d032",
  },
});
