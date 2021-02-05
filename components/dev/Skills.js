import React from 'react'
import { useStore, connect } from 'react-redux'

const Skills = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <div name="Skills" id="#Skills" className="section flex-col text-center p-4 md:p-20">
      <div className="text-box">
        <h2 className="md:text-left text-yellow underline">{content[0].acf.sections.skills.header}</h2>
        <p className="md:text-left py-8">{content[0].acf.sections.skills.description}</p>
      </div>
      <ul>
        {content[0].acf.sections.skills.skill_sets.map((skill_set, index) =>
          <li className="py-4" key={skill_set.title.replace(/\s/g, '')} index={skill_set.title.replace(/\s/g, '')}>
            <h3 className="text-yellow pb-2">{skill_set.title}</h3>
            <ul className="list-none">
              {skill_set.skills.map((skill, index) =>
                <li className="mx-4 skill-slide inline-block" key={skill.skill.replace(/\s/g, '')} index={skill.skill.replace(/\s/g, '')}>
                  <p>{skill.skill}</p>
                </li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(Skills)

export default Container;
