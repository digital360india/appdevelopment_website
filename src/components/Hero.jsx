import React from "react";
import "./style.css"; // Import your CSS file
function Hero() {
  const showSidebar = () => {
    // Define your function here if needed
  };
  return (
    <div className="all">
      <div className="main">
        <header className="lg:flex justify-around items-center py-4 px-6">
            <div className="flex ">
            <div className="mr-4 bg-white lg:order-1">
              <button className="lg:hidden">
                <img src="menu-02.png" alt="Menu" />
              </button>
            </div>
            <div className="sm:order-2">
              <img className="logo" src="logo.png" alt="Logo" />
            </div></div>
            <div className="order-2">
          <nav className="hidden md:block ">
            <ul className="mid">
              <li>
                <a href="#">Cross Platform</a>
              </li>
              <li>
                <a href="#">Tech Stack</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Our Approach</a>
              </li>
            </ul>
          </nav>
          </div>
          <div className="hidden lg:block order-3">
            <a href="#">
              <button className="hideSidebar">Enquire Now</button>
            </a>
          </div>
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
