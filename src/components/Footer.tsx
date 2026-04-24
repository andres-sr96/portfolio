import "./Footer.css";
import GitHubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-name">ANDRES SANCHEZ</span>
        <span className="footer-title">Software Developer</span>
      </div>
      <div className="footer-right">
        <a
          href="https://github.com/andres-sr96"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <img src={GitHubIcon} alt="GitHub" className="footer-icon" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sanchezandres96/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <img src={LinkedInIcon} alt="LinkedIn" className="footer-icon" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
