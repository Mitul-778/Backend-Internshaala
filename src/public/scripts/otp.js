const validate = () => {
  let value = document.getElementById("otp_value").value;
  let otp=localStorage.getItem("otp")
  if (value == otp) {
    alert("Payment Success !");
    window.location.href = "./../html/index.html";
  } else {
    alert("Wrong OTP !");
    document.getElementById("otp_value").value = null;
  }
};
