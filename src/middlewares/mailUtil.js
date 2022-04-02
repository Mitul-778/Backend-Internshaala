const transporter = require("../configs/mail");

const sendOTP = async(user, OTP)=>{
    await transporter.sendMail({
        from:`Intershaala@gmail.com`,
        to :user.email,
        subject :`Intershaala : Payment OTP`,
        html : `<center>
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
                <p>Thank you for Purchasing the Course !</p>
                <p>OTP for Payment is : <b> ${OTP}</b></p>
                <p>Happy Learning !</p>
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
      </center>`
    })
}

module.exports = sendOTP