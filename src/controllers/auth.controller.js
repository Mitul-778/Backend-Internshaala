const User = require("../models/user.model");
// const Admin = require("../models/admin.model");
const jwtoken = require("jsonwebtoken");
const transporter = require("../configs/mail");
require("dotenv").config();

const generateToken = (user) => {
  return jwtoken.sign({ user }, process.env.SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      return res.status(500).send("User already exists");
    }

    user = await User.create(req.body);

    const token = generateToken(user);
    
    transporter.sendMail({
      from: "Internshala",
      to: user.email,
      subject: `Welcome to Internshala ${user.firstName} ${user.lastName}`,
      html: `
      <center>
      <table
        style="
          background: #ffffff;
          width: 600px;
          color: black;
          text-align: center;
        "
      >
        <tbody>
          <tr>
            <td>
              <span
                style="
                  display: block;
                  background: skyblue;
                  color: white;
                  padding: 6px 0;
                  font-size: 20px;
                "
                >Internshala: Look for Internship Anywhere, Anytime!</span
              >
              <h1 style="text-align: center">
                <a
                  style="border-style: none"
                  border="0"
                  href="https://internshala.com/"
                  target="_blank"
                  data-saferedirecturl="https://internshala.com/"
                >
                  <img
                    src="https://internshala.com/static/images/common/new_internshala_logo.svg"
                    alt="Internshaala"
                    class="CToWUd"
                  />
                </a>
              </h1>
              <h1 class="m_-7373064222375084159greeting">
                Hello,&nbsp; ${user.firstName}
              </h1>
              <p>Thank you for Registering with Us !</p>
              <p>
                For questions, please visit our
                <a
                  href="https://internshala.com/employer/help_center"
                  target="_blank"
                  data-saferedirecturl="https://internshala.com/employer/help_center"
                  >FAQ page</a
                >
                or contact us at
                <a href="https://internshala.com/contact" target="_blank"
                  >internshaala@gmail.com</a
                >.
              </p>
              <p>Sincerely,<br />Internshaala Team</p>
            </td>
          </tr>
        </tbody>
      </table>
    </center>`,
    });

    return res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};



const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    console.log(req.body.email);
    if (!user) {
      return res.status(400).send("Wrong Email or Password");
    }
    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).send({ message: "Wrong Email or Password" });
    }

    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

module.exports = { register, login, generateToken };
