import React from 'react';

//components
import Item from './../../Item';

const Backend = () => {
  const backEndItems = ['NodeJS', 'Express', 'MongoDB'];
  return (
    <>
      {backEndItems.map(item => (
        <div className="row">
          <Item columns={4} text={item} />
        </div>
      ))}
    </>
  );
};

export default Backend;
