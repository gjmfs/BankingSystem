import { NavLink } from "react-router-dom";
import menu from "../assets/icons/navIcons/menu.svg";
import close from "../assets/icons/navIcons/close.svg";
import logo from "../assets/images/logo/logo.jpg";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/home">
        <img id="logo" src={logo} alt="logo" />
      </NavLink>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <img className="icons" src={menu} />
      </label>
      <label htmlFor="sidebar-active" id="overlay"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <img className="icons" src={close} />
        </label>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/exRates">Exchange Rates</NavLink>
        <NavLink to="/card">Cards</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};
