import React, { useState } from 'react';

//styles
import './styles.scss';

//components
import Frontend from './Frontend';
import Backend from './Backend';
import StackHandler from './StackHandler';

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
        <span className="circle-decorator"></span>
      </div>
      <StackHandler
        handler={handleStackCard}
        stack={stack}
        frontEnd={front}
        backEnd={back}
      />
    </section>
  );
};

export default Stack;
