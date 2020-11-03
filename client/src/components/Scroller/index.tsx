import React from 'react'

import './styles.scss'

const Scroller: React.FC = () => {
  return (
    <div className="container-scroller">
      <div className="line-scrolled"></div>
      <div className="line-active"></div>
      <div className="circle"></div>
    </div>
  )
}

export default Scroller;
