import React from "react";
import "./style.css"; // Import your CSS file
function Hero() {
  const showSidebar = () => {
    // Define your function here if needed
  };
  return (
    <div className="all">
      <div className="main">
        <header>
          {/* <li onClick={showSidebar}>
            <a href="#">
              <img src="menu-02.png" alt="" />
            </a>
          </li> */}
          <img className="logo" src="logo.png" alt="" />
          <nav className="mid">
            <ul className="links">
              <li className="hideOnMobile">
                <a href="#">Cross Platform</a>
              </li>
              <li className="hideOnMobile">
                <a href="#">Tech Stack</a>
              </li>
              <li className="hideOnMobile">
                <a href="#">Clients</a>
              </li>
              <li className="hideOnMobile">
                <a href="#">Our Approach</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <button className="hideSidebar">Enquire Now</button>
          </a>
        </header>
        <div className="content">
          <div className="tags">
            <h1>Contact Us</h1>
            <p>
              Digital 360 India <br />
              80-83 Long Lane <br />
              London EC1A 9ET
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;