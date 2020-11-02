import React from 'react'

//styles
import './styles.scss'

//components
import Item from './Item'

const Stack: React.FC = () => {
  return (
    <section className="container-stack">
      <div className='container stack-card'>
        <div className="row">
          <Item text="React"/>
          <Item text="Bootstrap"/>
          <Item text="Rest APIs"/>
        </div>
        <div className="row">
          <Item text="Redux"/>
          <Item text="Sass"/>
          <Item text="Handlebars"/>
        </div>
        <div className="row">
          <Item text="Typescript"/>
          <Item text="Styled Components"/>
        </div>
      </div>

      <div className="d-flex justify-content-between pl-0 mt-5">
        <h3 className="px-4">stack(pedro.frontend)</h3>
        <h3 className="px-4">stack(pedro.backend)</h3>
      </div>
    </section>
  )
}

export default Stack;
