import React from 'react'

//styles
import './styles.scss'

//components
import Item from '../Item'

const Stack: React.FC = () => {
  return (
    <section className="container-stack">
      <h2 className="mb-5">const {"{ stack }"} = pedro;</h2>
      <div className='container stack-card'>
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
          <Item columns={4} text="Styled Components"/>
        </div>
      </div>

      <div className="d-flex justify-content-between pl-0 mt-5">
        <h3 className="px-4">stack(pedro.frontend);</h3>
        <h3 className="px-4">stack(pedro.backend);</h3>
      </div>
    </section>
  )
}

export default Stack;
