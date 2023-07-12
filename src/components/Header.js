import { LOGO_URL } from "../utils/constants";
import Login from "./Login";
import { useState } from "react";
const Header = () => {
  const [isVisible, setIsVisible] = useState("Login");

  return (
    <div className="header">
      <div className="logo container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              isVisible === "Login"
                ? setIsVisible("Logout")
                : setIsVisible("Login");
            }}
          >
            {isVisible}
          </button>
        </ul>
      </div>
      {isVisible && <Login />}
    </div>
  );
};

export default Header;
