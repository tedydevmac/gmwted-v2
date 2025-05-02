import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Portfolio Website",
    image: "assets/projects/portfolio.png",
    description:
      "A responsive personal portfolio website built with React and styled-components.",
    githubLink: "https://github.com/tedydevmac/portfolio-website",
    liveLink: "https://ted-portfolio.com",
    tags: ["React", "Web Development"],
  },
  {
    title: "E-Commerce App",
    image: "assets/projects/ecommerce.png",
    description:
      "A full-stack e-commerce application with user authentication and payment integration.",
    githubLink: "https://github.com/tedydevmac/ecommerce-app",
    liveLink: "https://ted-ecommerce.com",
    tags: ["Node.js", "MongoDB"],
  },
  {
    title: "Weather Dashboard",
    image: "assets/projects/weather.png",
    description:
      "A weather dashboard that fetches real-time weather data using OpenWeather API.",
    githubLink: "https://github.com/tedydevmac/weather-dashboard",
    liveLink: "https://ted-weather.com",
    tags: ["API", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span className="project-tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
