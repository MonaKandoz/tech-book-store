import { NavLink , Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assests/Logo.svg';
import { ReactComponent as CartImg } from "../../assests/cart.svg";

import './navbar.style.scss';

const NavBar = () => (
  <div className="app-nav-bar">
    <div className="left-side-link">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/contact-us" className="nav-link">Contact us</NavLink>
    </div>
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="right-side-link">
      <NavLink to="/cart" className="nav-link">
        <CartImg />
      </NavLink>
      <NavLink to="/sign-up" className="nav-link">Sign up/ login</NavLink>
    </div>
  </div>
);

export default NavBar;