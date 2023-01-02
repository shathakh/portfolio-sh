import React from 'react';
import PropTypes from 'prop-types';

function Project({
  name, image, description, demo, code,
}) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img className="image-card" src={image} alt="first project" />
      <p>
        {description}
      </p>
      <div className="card-links">
        <div><a href={code} target="_blank" rel="noreferrer">Code</a></div>
        <div><a href={demo} target="_blank" rel="noreferrer">Demo</a></div>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default Project;
