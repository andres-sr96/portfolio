import { NavLink } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "../assets/icons/computer-code.svg";

const navLinks = [
  { label: "PROJECTS", to: "/projects" },
  { label: "ABOUT ME", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">ANDRES SANCHEZ</NavLink>
      </div>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
      <div className="navbar-icon">
        <img src={MenuIcon} alt="menu" className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
