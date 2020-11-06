import React from 'react';

//models
interface toProps {
  handler: (stack: string) => void;
  stackState: string;
  frontEnd: string;
  backEnd: string;
  decoratorSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const StackHandler: React.FC<toProps> = ({
  handler,
  stackState,
  frontEnd,
  backEnd,
  decoratorSetter
}) => {
  const stacksList: string[] = [frontEnd, backEnd];

  return (
    <div className="d-flex justify-content-between pl-0 mt-5">
      {stacksList.map(stackItem => (
        <h3
          className={'px-4' + (stackState === stackItem ? ' is-selected' : '')}
          onClick={() => handler(stackItem)}
          onMouseEnter={
            stackState !== stackItem ? () => decoratorSetter(true) : undefined
          }
          onMouseLeave={
            stackState !== stackItem ? () => decoratorSetter(false) : undefined
          }
        >
          stack(pedro.{`${stackItem}end`});
        </h3>
      ))}
    </div>
  );
};

export default StackHandler;
