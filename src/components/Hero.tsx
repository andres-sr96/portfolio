import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-availability">AVAILABILITY: OPEN FOR PROJECTS</p>
          <h1 className="hero-title">Software Developer</h1>
          <p className="hero-description">
            I’m a software development student who enjoys building things and
            feel good to use. I like breaking down problems, writing code, and
            learning new tools as I go. Most of all, I’m just always curious and
            trying to get a little better with every project I build.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              VIEW PROJECTS
            </a>
            <a href="#contact" className="btn btn-secondary">
              GET IN TOUCH
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img src="./src/assets/images/hero-image.jpg" alt="Hero" />
            <p className="hero-image-credit">
              Photo by{" "}
              <a
                href="https://unsplash.com/@oskaryil?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oskar Yildiz
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/turned-on-gray-laptop-computer-cOkpTiJMGzA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
