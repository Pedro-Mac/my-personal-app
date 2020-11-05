import React from 'react';

//models
interface toProps {
  handler: (stack: string) => void;
  stack: string;
  frontEnd: string;
  backEnd: string;
}

const StackHandler: React.FC<toProps> = ({
  handler,
  stack,
  frontEnd,
  backEnd
}) => {
  return (
    <div className="d-flex justify-content-between pl-0 mt-5">
      <h3
        className={'px-4' + (stack === frontEnd ? ' active' : '')}
        onClick={() => handler(frontEnd)}
      >
        stack(pedro.frontend);
      </h3>
      <h3
        className={'px-4' + (stack === backEnd ? ' active' : '')}
        onClick={() => handler(backEnd)}
      >
        stack(pedro.backend);
      </h3>
    </div>
  );
};

export default StackHandler;
