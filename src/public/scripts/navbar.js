const navbar = () => {
  return `<a class="logo" href="#">
    <img
      class="logo"
      src="https://internshala.com/static/images/common/new_internshala_logo.svg"
      alt="InternShala"
    />
  </a>
  <nav>
    <ul id="nav_link">
      <li class="nav-hover">
        <a href="./../html/card.html"
          >Internships<i class="fa-solid fa-caret-down"></i
        ></a>
        <div class="hover">
          <div class="hover--navbar">
            <div>
              <h5>Location</h5>
              <h5>Profile</h5>
              <h5>Category</h5>
              <h5>Specialization</h5>
              <p>with Guaranteed internships</p>
            </div>
            <div>
              <ul>
                <li><a href="">Work from Home</a></li>
                <li><a href="">Internship in Banglore</a></li>
                <li><a href="">Internship in Delhi</a></li>
                <li><a href="">Intership in Hyderabad</a></li>
                <li><a href="">Intership in Mumbai</a></li>
                <li><a href="">Intership in Chennai</a></li>
                <li><a href="">Intership in Pune</a></li>
                <li><a href="">Intership in Kolkata</a></li>
                <li><a href="">Intership in Jaipur</a></li>
                <li><a id="last" href="">View all internships</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-hover">
        <a href="../../html/web_development.html"
          >Online Training <span id="offer">OFFER</span
          ><i class="fa-solid fa-caret-down"></i
        ></a>
        <div class="hover">
          <div class="hover--navbar">
            <div>
              <h5>Most Popular</h5>
              <h5>Programming</h5>
              <h5>Engineering</h5>
              <h5>Design</h5>
              <h5>Creative Art</h5>
              <h5>Language</h5>
              <h5>Architecture</h5>
            </div>
            <div>
              <ul>
                <li><a href="">Web Development</a></li>
                <li><a href="">Digital Marketing</a></li>
                <li><a href="">Programming with Python</a></li>
                <li><a href="">AutoCAD</a></li>
                <li><a href="">Machine Learning</a></li>
                <li><a href="">Data Science</a></li>
                <li><a href="">Android Apps</a></li>
                <li><a href="">Financial Modeling</a></li>
                <li><a href="">Programming with C</a></li>
                <li><a href="">Advance Excel</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li>
        <a href="#">Freshers Job</a>
      </li>
      <a><button id="bu" class="button">Login</button></a>
      <a><button onclick="window.location.href='../html/register.html'" class="button" id="register">Register</button></a>
    </ul>
  </nav>`;
};

export default navbar;