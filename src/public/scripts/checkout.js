const validatePay = () =>{
    let otp = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem("otp",otp)
    const data = { otp: otp };
  
    fetch("http://localhost:5000/otp", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    let card = document.getElementById('card_no').value;
    let cvv = document.getElementById('cvv').value;
    if(card == '' || cvv == ''){
        alert('Fill All Details !');
        document.getElementById('cvv').value=null;
        document.getElementById('card_no').value=null;
    }else{
        alert('OTP Send !')
        window.location.href='./../html/otp.html'
    }
}