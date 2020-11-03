import React from 'react'

//components
import Item from './../../Item';

const Backend = () => {
  return (
    <>
    <div className="row">
      <Item columns={4} text="NodeJS"/>
    </div>
    <div className="row">
      <Item columns={4} text="Express"/>
    </div>
    <div className="row">
      <Item columns={4} text="MongoDB"/>
    </div>
  </>
  )
}

export default Backend;
