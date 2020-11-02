import React from 'react'

const Stack: React.FC = () => {
  const frontEndLanguages = ['React', 'Bootstrap', 'Rest APIs', 'Redux', 'Sass', 'Handlebars', 'Typescript', 'Styled Components']
  return (
    <div>
      <ul className="list-group">
        {frontEndLanguages.map(value => <li>{value}</li>)}
      </ul>
    </div>
  )
}

export default Stack;
