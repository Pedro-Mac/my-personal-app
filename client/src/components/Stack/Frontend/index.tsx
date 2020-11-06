import React from 'react';

import Item from './../../Item';

const Frontend = () => {
  const frontendItems: string[] = [
    'React',
    'Bootstrap',
    'Rest APIs',
    'Redux',
    'Sass',
    'Handlebars',
    'Typescript',
    'Styled Components'
  ];

  for (let i: number = 0; i < frontendItems.length; i++) {}
  const groupItems = (itemsList: string[]): string[][] => {
    const finalArray: string[][] = [];
    for (let i: number = 0; i < itemsList.length; i += 3) {
      finalArray.push(itemsList.slice(i, i + 3));
    }
    return finalArray;
  };

  return (
    <>
      {groupItems(frontendItems).map(itemGroup => (
        <div className="row">
          {itemGroup.map(item => (
            <Item columns={item === 'Styled Components' ? 0 : 4} text={item} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Frontend;
