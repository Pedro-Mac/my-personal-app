import React, {useState} from 'react'

//components
import Item from './../../Item'

//models
interface Props {
  projectName: string;
  projectLink: string;
}

const ProjectCard: React.FC<Props> = ({projectName, projectLink}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlipping = (): void => {
    setIsFlipped(()=> !isFlipped);
  }
  return (
    <div className="scene col-3 p-0" onMouseEnter={handleFlipping} onMouseLeave={handleFlipping}>
            <div className={'card' + (isFlipped ? ' is-flipped' : '')}>
              <div className="card__face d-flex align-items-center">
                <Item text={projectName}/>
              </div>
              <div className="card__face card__face--back ">
                <a href={projectLink} className="d-flex justify-content-center align-items-center">
                  <img src="./assets/images/link.svg" alt="link"/>
                </a>
              </div>
            </div>
          </div>
  )
}

export default ProjectCard;
