import React from 'react';


//styles
import './styles.scss'

//components
import ProjectCard from './ProjectCard';


const Projects: React.FC = () => {

  return (
    <section className="container-projects">
      <h2>const {'{ projects }'} = pedro;</h2>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between">
          <ProjectCard projectLink="https://vanilla-jobs.netlify.app/" projectName="Vanilla Jobs"/>
          <ProjectCard projectLink="https://wish-list-project.herokuapp.com/" projectName="Flame Wisher"/>
          <ProjectCard projectLink="https://ironhack-project1-pm.netlify.app" projectName="My very 1st project"/>
        </div>
      </div>
    </section>
  )
}

export default Projects;
