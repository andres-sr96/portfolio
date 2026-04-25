import "./Projects.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "GameVault",
    description:
      "A web application for gamers to discover, track, and review video games across all platforms. Features include personalized recommendations, achievement tracking, and a community-driven rating system.",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    languages: ["React", "TypeScript", "Node.js"],
    link: "#",
    variant: "featured" as const,
  },
  {
    id: 2,
    title: "WeatherApp",
    description:
      "Real-time weather forecasting app with location-based predictions, interactive maps, and severe weather alerts.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80",
    languages: ["React", "API"],
    link: "#",
    variant: "standard" as const,
  },
  {
    id: 3,
    title: "TaskMaster",
    description:
      "Productivity app for managing tasks, deadlines, and team collaboration with Kanban boards and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
    languages: ["React", "TypeScript"],
    link: "#",
    variant: "standard" as const,
  },
  {
    id: 4,
    title: "DevPortfolio",
    description:
      "Personal portfolio website showcasing projects, skills, and professional background for potential employers.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    languages: ["React", "TypeScript"],
    link: "#",
    variant: "featured" as const,
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects I’ve Built.</h2>
        <p className="projects-subtitle">
          A collection of things I’ve worked on while learning software
          development, from small apps to full-scale experiments.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
