const validate = () => {
  let value = document.getElementById("otp_value").value;
  if (value == 1234) {
    alert("Payment Success !");
    window.location.href = "./../html/index.html";
  } else {
    alert("Wrong OTP !");
    document.getElementById("otp_value").value = null;
  }
};
