import React, { useState } from 'react';

//styles
import './styles.scss';

//components
import Frontend from './Frontend';
import Backend from './Backend';

const Stack: React.FC = () => {
  const front: string = 'front';
  const back: string = 'back';

  const [stack, setStack] = useState<string>(front);
  const handleStackCard = (stack: string) => {
    setStack(() => stack);
  };

  return (
    <section className="container-stack">
      <h2 className="mb-5">const {'{ skills }'} = pedro;</h2>
      <div className="container stack-card d-flex flex-column justify-content-center">
        {stack === front ? <Frontend /> : <Backend />}
        <div className="circle-decorator"></div>
      </div>

      <div className="d-flex justify-content-between pl-0 mt-5">
        <h3
          className={'px-4' + (stack === front ? ' active' : '')}
          onClick={() => handleStackCard(front)}
        >
          stack(pedro.frontend);
        </h3>
        <h3
          className={'px-4' + (stack === back ? ' active' : '')}
          onClick={() => handleStackCard(back)}
        >
          stack(pedro.backend);
        </h3>
      </div>
    </section>
  );
};

export default Stack;
