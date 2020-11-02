import React from 'react'

interface ItemProps {
  text: string;
  columns?: number;
}

const Item: React.FC<ItemProps> = ({ text, columns }) => {
  return (
    <div className={columns ? `col-${columns}` : 'col'}>
      <p>{text}</p>
    </div>
  )
}

export default Item;
