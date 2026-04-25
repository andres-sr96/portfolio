import "./Footer.css";
import { icons } from "../assets/icons";

const socialLinks = [
  { href: "https://github.com/andres-sr96", icon: icons.github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sanchezandres96/", icon: icons.linkedin, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-name">ANDRES SANCHEZ</span>
        <span className="footer-title">Software Developer</span>
      </div>
      <div className="footer-right">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
