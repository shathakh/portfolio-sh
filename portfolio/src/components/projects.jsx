import React from 'react';
import Project from './projectCard';
import projectsList from '../projects';

function Projects() {
  return (
    <div id="projects" className="projects">
      <h2>My Recent Work</h2>
      <div className="cards-section">
        {projectsList.map((ele) => (
          <Project
            name={ele.name}
            image={ele.image}
            description={ele.description}
            demo={ele.demo}
            code={ele.code}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
