const validatePay = () =>{
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