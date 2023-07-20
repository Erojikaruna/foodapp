import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Login from "./Login";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isVisible, setIsVisible] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-md">
      <div className="">
        <img className="w-24 rounded-lg " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">OnlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
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
