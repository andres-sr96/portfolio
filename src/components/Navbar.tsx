import "./Navbar.css";
import MenuIcon from "../assets/icons/computer-code.svg";

const navLinks = [
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT ME", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">ANDRES SANCHEZ</a>
      </div>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
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
