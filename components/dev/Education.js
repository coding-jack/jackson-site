import React from 'react'
import { useStore, connect } from 'react-redux'

const Education = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  return (
    <div name="Education" id="#Education" className="section flex-col text-center">
      <h2>{content[0].acf.sections.education.header}</h2>
      <p className="p-12">{content[0].acf.sections.education.description}</p>
      <ul>
        {content[0].acf.sections.education.schools.map((school, index) =>
          <li key={index}>
            <h3>{school.name}</h3>
            <p>{school.location}</p>
            <p>{school.date}</p>
            <p>{school.certification}</p>
            <p>{school.description}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(Education);

export default Container;
