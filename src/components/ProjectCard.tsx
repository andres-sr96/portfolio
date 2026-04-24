import "./ProjectCard.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  languages: string[];
  link: string;
  variant: "featured" | "standard";
}

function ProjectCard({
  title,
  description,
  image,
  languages,
  link,
  variant,
}: Project) {
  return (
    <div className={`project-card ${variant}`}>
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-content">
        <div className="project-card-languages">
          {languages.map((lang) => (
            <span key={lang} className="language-tag">
              {lang}
            </span>
          ))}
        </div>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          <span>VIEW PROJECT</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
