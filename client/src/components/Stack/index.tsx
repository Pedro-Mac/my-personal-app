import React, { useState } from 'react';

//styles
import './styles/main.scss';

//components
import Frontend from './Frontend';
import Backend from './Backend';
import StackHandlers from './StackHandlers';

const Stack: React.FC = () => {
  const front: string = 'front';
  const back: string = 'back';
  //state
  const [stack, setStack] = useState<string>(front);
  const [activateDecorator, setActivateDecorator] = useState<boolean>(false);

  const handleStackCard = (stack: string) => {
    setStack(() => stack);
  };

  return (
    <section className="container-stack">
      <h2 className="mb-5">const {'{ skills }'} = pedro;</h2>
      <div className="container stack-card d-flex flex-column justify-content-center">
        {stack === front ? <Frontend /> : <Backend />}
        <span
          className={
            'circle-decorator' +
            (activateDecorator ? ' is-active' : ' is-inactive')
          }
        ></span>
      </div>
      <StackHandlers
        handler={handleStackCard}
        stackState={stack}
        frontEnd={front}
        backEnd={back}
        decoratorSetter={setActivateDecorator}
      />
    </section>
  );
};

export default Stack;
