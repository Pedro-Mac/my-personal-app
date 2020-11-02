import React from 'react'

interface ItemProps {
  text: string;
}

const Item: React.FC<ItemProps> = props => {
  return (
    <div className="col-4">
      <p>{props.text}</p>
    </div>
  )
}

export default Item;
