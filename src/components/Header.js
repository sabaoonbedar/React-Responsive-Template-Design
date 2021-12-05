import React from "react";
import Logo from "./assets/logo.png";
import "../App.css";
function Header(props) {
  return (
    <>
      <div className="menu">
        <ul>
          <li className="logo">
            <img src={Logo} alt="logo" />
          </li>
          <li className="active">Home</li>
          <li>Services</li>
          <li>Product</li>
          <li>Contact</li>
          {/* you can use link of react router dom here as well */}
          <li>
            <a href="#" className="sign-up-btn">
              {" "}
              <span> Sign Up </span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="login-btn">
              <span> Login </span>{" "}
            </a>
          </li>

          <li>
            <div class="dropdown">
              <a class="dropbtn">
                <i class="fas fa-ellipsis-h"></i>
              </a>
              <div class="dropdown-content">
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
                <a onClick={() => props.changeTheme()}>
                  {props.dark ? "Light Theme" : "Dark Theme"}
                </a>
              </div>
            </div>
          </li>
          <li>
            <span className="switch-theme-icon">
              {" "}
              <i
                className="fas fa-palette"
                onClick={() => props.changeTheme()}
              ></i>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
