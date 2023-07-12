import { LOGO_URL } from "../utils/constants";
import Login from "./Login";
const Header = () => {
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
        </ul>
        <Login />
      </div>
    </div>
  );
};

export default Header;
