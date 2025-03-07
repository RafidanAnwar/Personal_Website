import { useState, useEffect } from "react";
import "../style/Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/RafidanAnwar/repos")
      .then((response) => response.json())
      .then((data) => {
        const formattedProjects = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || "No description provided.",
          url: repo.html_url,
        }));
        setProjects(formattedProjects);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="fade-in">My GitHub Projects</h2>
        {loading ? (
          <p className="loading">Fetching projects...</p>
        ) : projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card zoom-in" key={project.id}>
                <h3>{project.name}</h3>
                {/* <p>{project.description}</p> */}
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn">
                  <FaGithub className="github-icon" /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-projects">No projects available.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
