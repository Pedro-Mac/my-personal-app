import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

//components
import Item from './../../Item';

//stykes
import './styles.scss';

//models
interface Props {
  projectName: string;
  projectLink: string;
}

const ProjectCard: React.FC<Props> = ({ projectName, projectLink }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [decorationIsActive, setDecorationIsActive] = useState<boolean>(false);

  const handleFlipping = (): void => {
    if (isFlipped) {
      setTimeout(() => setIsFlipped(false), 300);
    } else {
      setIsFlipped(true);
    }
    setDecorationIsActive(!decorationIsActive);
  };
  return (
    <div
      className="scene col-3 p-0"
      onMouseEnter={handleFlipping}
      onMouseLeave={handleFlipping}
    >
      <a
        href={projectLink}
        className="d-flex justify-content-center align-items-center w-100 h-100"
      >
        <div className={'card' + (isFlipped ? ' is-flipped' : '')}>
          <div className="card__face d-flex align-items-center">
            <Item text={projectName} />
          </div>
          <div className="card__face card__face--back d-flex justify-content-center">
            <img className="w-50" src="./assets/images/link.svg" alt="link" />
          </div>
        </div>
        <Transition in={decorationIsActive} timeout={200}>
          {state => (
            <div
              style={{
                zIndex: -1,
                backgroundColor: state === 'exiting' ? '#14213D' : '',
                opacity: state === 'entered' ? 1 : state === 'exiting' ? 0 : 0,
                transform:
                  state === 'entered' ? 'translateY(25px)' : 'translateY(0px)'
              }}
              className="decoration-circle"
            ></div>
          )}
        </Transition>
      </a>
    </div>
  );
};

export default ProjectCard;
