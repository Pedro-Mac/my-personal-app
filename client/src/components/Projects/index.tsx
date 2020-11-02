import React from 'react';

//components
import Item from './../Item'

//styles
import './styles.scss'


const Projects: React.FC = () => {
  return (
    <section className="container-projects">
      <h2>const {'{ projects }'} = pedro;</h2>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between">
          <Item columns={3} text="Vanilla Jobs"/>
          <Item columns={3} text="Wish list"/>
          <Item columns={3} text="Star wars"/>
        </div>
      </div>
    </section>
  )
}

export default Projects;
