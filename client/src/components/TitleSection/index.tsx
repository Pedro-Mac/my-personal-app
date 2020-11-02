import React from 'react'

import './styles.scss'

const TitleSection: React.FC = () => {
  return (
    <section>
      <div className="container-title">
        <h1 className="text-left" >Hi, I am</h1>
        <h2 className="text-left" >'Pedro'</h2>
      </div>

      <img className="mt-4 mb-5" src="./assets/images/coding-icon.svg" alt="coding"/>

      <div className="container-title-handlers mt-5">
        <ul className="d-flex flex-row justify-content-between list-group">
          <li>pedro.stack</li>
          <li>pedro.passion</li>
          <li>pedro.hobbie</li>
        </ul>
      </div>
    </section>
  )
}

export default TitleSection;
