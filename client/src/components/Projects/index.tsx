import React, {useState} from 'react';

//components
import Item from './../Item'

//styles
import './styles.scss'


const Projects: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlipping = (): void => {
    setIsFlipped(()=> !isFlipped);
  }

  return (
    <section className="container-projects">
      <h2>const {'{ projects }'} = pedro;</h2>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between">
          <div className="scene col-3 p-0" onMouseEnter={handleFlipping} onMouseLeave={handleFlipping}>
            <div className={'card' + (isFlipped ? ' is-flipped' : '')}>
              <div className="card__face d-flex align-items-center">
                <Item text="Vanilla Jobs"/>
              </div>
              <div className="card__face card__face--back ">
                <a href="https://vanilla-jobs.netlify.app/" className="d-flex justify-content-center align-items-center">
                  <img src="./assets/images/link.svg" alt="link"/>
                </a>
              </div>
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
