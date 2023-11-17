import { useDispatch, useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Login from "./Login";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState("false");

  const onlineStatus = useOnlineStatus();
  const [visible, setVisible] = useState(false);

  //const { loggedInUser } = useContext(UserContext);

  //subscribing to the store

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 bg-white z-10 shadow-md ">
      <div className="p-3 w-full flex justify-between items-center">
        <div className="">
          <img className="w-24 rounded-lg " src={LOGO_URL} />
        </div>

        <ul className=" flex p-2  justify-around bg-white left-0 w-ful ">
          <li className="px-3 py-2">
            OnlineStatus:{onlineStatus ? "✅" : "🔴"}
          </li>

          <li className="px-3 py-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-3 py-2">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-3 py-2">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <ul className="h-full flex justify-between gap-5  items-center ">
          <Link to="/cart">
            <li
              data-testid="cart"
              className="px-3 py-2  text-gray-700 relative text-2xl"
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute font-bold text-sm px-1 right-1 top-[-1px] bg-gray-400 text-white rounded-lg">
                {cartItems.length}
              </span>
            </li>
          </Link>

          <li className="px-2 py-1 bg-gray-900 border-2  transition duration-0 text-white  hover:bg-white hover:text-gray-900 hover:duration-150 hover:border-gray-900">
            <button className="w-auto" onClick={() => setVisible(!visible)}>
              {isVisible ? "Login" : "Logout"}
            </button>
          </li>
        </ul>

        {visible && <Login />}
      </div>
    </div>
  );
};

export default Header;
