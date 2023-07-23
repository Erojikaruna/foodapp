import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Login from "./Login";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState("Login");
  const onlineStatus = useOnlineStatus();

  //const { loggedInUser } = useContext(UserContext);

  //subscribing to the store

  const cartItems = useSelector((store) => store.cart.items);

  /*  const store = useSelector((store) => store);
  const cartItems = store.cart.items;
 */
  return (
    <div className="  flex justify-between shadow-md bg-white sticky">
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
          <li className="px-3">
            <Link to="/cart">
              <li className="relative px-3  text-xl text-gray-700 ">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="absolute font-bold text-sm px-1 right-1 top-[-1px] bg-gray-400 text-white rounded-lg">
                  {cartItems.length}
                </span>
              </li>
            </Link>
          </li>
          <button
            className="border "
            onClick={() => {
              isVisible === "Login"
                ? setIsVisible("Logout")
                : setIsVisible("Login");
            }}
          >
            {isVisible}
          </button>
          {/* <li className="px-4">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
