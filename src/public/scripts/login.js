function logn() {
  return `<div class="form-popup" id="myForm">
    <form class="form-container">
      <h1>Login</h1>

      <label for="email"><b>Email</b></label>
      <input
        id="em"
        type="text"
        placeholder="Enter Email"
        name="email"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        id="ps"
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
      />
      <p id="pp"><a>Forgot Password?</a></p>

      <button class="btn" id="btns">Login</button>
      
      <p id="p">New to Intershala?<a href="./../html/register.html">Register</a></p>
    </form>
  </div>`;
}

export default logn;
