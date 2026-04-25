import "./About.css";
import { icons } from "../assets/icons";
import type { IconName } from "../assets/icons";
import ProfilePicture from "../assets/images/profile-picture.png";

// Static data
const skillsData: { icon: IconName; title: string; languages: string[] }[] = [
  {
    icon: "programming",
    title: "PROGRAMMING",
    languages: ["Java", "Python", "C", "C#", "JavaScript"],
  },
  {
    icon: "web",
    title: "WEB",
    languages: ["HTML5", "CSS3", "React", "Angular", "Node.js", "Express.js"],
  },
  {
    icon: "framework",
    title: "FRAMEWORKS",
    languages: [".NET", "ASP.NET", "ADO.NET", "Git", "GitHub"],
  },
  {
    icon: "database",
    title: "DATABASES",
    languages: ["MySQL", "SQL"],
  },
];

const hobbiesData: { icon: IconName; label: string; alt: string }[] = [
  { icon: "cooking", label: "Cooking", alt: "Cooking pot with steam" },
  { icon: "music", label: "Music", alt: "Musical notes" },
  { icon: "reading", label: "Reading", alt: "Open book" },
  { icon: "coffee", label: "Coffee", alt: "Coffee cup" },
  { icon: "tennis", label: "Tennis", alt: "Tennis ball" },
  { icon: "gaming", label: "Gaming", alt: "Game controller" },
];

const educationData: {
  year: string;
  degree: string;
  school: string;
  hasDot: boolean;
}[] = [
  {
    year: "2024 - 2027",
    degree: "Software Development & Network Engineering",
    school: "Sheridan College",
    hasDot: true,
  },
  {
    year: "2015 - 2018",
    degree: "Gastronomy and Culinary Arts",
    school: "Le Cordon Bleu Peru",
    hasDot: false,
  },
];

// Reusable components
function SkillBox({ icon, title, languages }: (typeof skillsData)[0]) {
  return (
    <div className="skill-box">
      <div className="skill-item">
        <img src={icons[icon]} alt={title} className="skill-icon" />
        <h3 className="skill-title">{title}</h3>
      </div>
      <div className="skill-languages">
        {languages.map((lang) => (
          <span key={lang} className="language-tag">
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

function HobbyItem({ icon, label, alt }: (typeof hobbiesData)[0]) {
  return (
    <div className="hobby-item">
      <img src={icons[icon]} alt={alt} className="hobby-icon" />
      <span>{label}</span>
    </div>
  );
}

function TimelineItem({ year, degree, school, hasDot }: (typeof educationData)[0]) {
  return (
    <div className="timeline-item">
      {hasDot && <div className="timeline-dot"></div>}
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h3 className="timeline-degree">{degree}</h3>
        <span className="timeline-school">{school}</span>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-section">
          <div className="about-intro">
            <div className="about-left">
              <p className="about-availability">SOFTWARE DEVELOPER</p>
              <h1 className="about-title">
                Turning ideas into web applications.
              </h1>
              <p className="about-description">
                I'm Andres Sanchez, a software development student with a
                background in the culinary industry. I bring creativity,
                discipline, and attention to detail into everything I build. I'm
                currently focused on web development, building responsive and
                user-friendly applications while continuing to grow my
                full-stack skills.
              </p>
            </div>
            <div className="about-right">
              <div className="about-image-wrapper">
                <img
                  src={ProfilePicture}
                  alt="Andres Sanchez"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <p className="about-section-title">Technical Skills</p>
          <div className="skills-grid">
            {skillsData.map((skill) => (
              <SkillBox key={skill.title} {...skill} />
            ))}
          </div>
        </div>

        <div className="about-section">
          <div className="about-two-column">
            <div className="education-column">
              <h2 className="about-section-title">Education</h2>
              <div className="timeline">
                {educationData.map((item) => (
                  <TimelineItem key={item.degree} {...item} />
                ))}
              </div>
            </div>
            <div className="hobbies-column">
              <h2 className="about-section-title">Behind the Screen</h2>
              <div className="hobbies-list">
                {hobbiesData.map((hobby) => (
                  <HobbyItem key={hobby.label} {...hobby} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
