import React, {useState} from 'react';

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
          <div className="scene col-3 p-0">
            <div className="card">
              <div className="card__face card__face--front"><Item text="Vanilla Jobs"/></div>
              <div className="card__face card__face--back">Backside</div>
            </div>
          </div>
          
          <Item columns={3} text="Wish list"/>
          <Item columns={3} text="Star wars"/>
        </div>
      </div>
    </section>
  )
}

export default Projects;
