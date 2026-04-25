import "./Contact.css";
import { icons } from "../assets/icons";

const socialLinks = [
  {
    href: "https://github.com/andres-sr96",
    icon: icons.github,
    label: "GITHUB",
  },
  {
    href: "https://www.linkedin.com/in/sanchezandres96/",
    icon: icons.linkedin,
    label: "LINKEDIN",
  },
  {
    href: "/andresSanchezResume.pdf",
    icon: icons.resume,
    label: "DOWNLOAD RESUME",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-section">
          <div className="contact-intro">
            <p className="contact-availability">CONNECTIVITY</p>
            <h1 className="contact-title">Let's work together.</h1>
            <p className="contact-description">
              Have a project in mind or just want to chat? I'm always open to
              discussing new opportunities.
            </p>
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-grid">
            <form
              className="contact-form"
              action="https://formspree.io/f/mqewjpev"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input"
                  placeholder="Alan Wake"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="alan.wake@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="form-input form-textarea"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                SEND MESSAGE
              </button>
            </form>
            <div className="contact-info-card">
              <h2 className="contact-card-title">
                Available for opportunities
              </h2>
              <p className="contact-card-text">
                Based in Toronto (UTC−4). I usually respond within a day.
              </p>
              <div className="contact-social-links">
                {socialLinks.map((link) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    <img
                      src={link.icon}
                      alt={link.label}
                      className="contact-social-icon"
                    />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
