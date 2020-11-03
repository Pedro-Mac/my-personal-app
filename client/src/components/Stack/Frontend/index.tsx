import React from 'react'

import Item from './../../Item'

const Frontend = () => {
  return (
    <>
      <div className="row">
        <Item columns={4} text="React"/>
        <Item columns={4} text="Bootstrap"/>
        <Item columns={4} text="Rest APIs"/>
      </div>
      <div className="row">
        <Item columns={4} text="Redux"/>
        <Item columns={4} text="Sass"/>
        <Item columns={4} text="Handlebars"/>
      </div>
      <div className="row">
        <Item columns={4} text="Typescript"/>
        <Item text="Styled Components"/>
      </div>
    </>
  )
}

export default Frontend;
