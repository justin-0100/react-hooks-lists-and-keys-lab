import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <section>
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;

