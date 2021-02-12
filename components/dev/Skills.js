import React from 'react'
import { useStore, connect } from 'react-redux'

const Skills = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  function removeSpace(prop) {
    return prop.replace(/\s/g, '');
  }

  return (
    <div className="flex-col p-4 md:px-20 md:pt-20 relative">
      <div className="nav-marker" name="Skills" id="#Skills"></div>
      <div className="text-box">
        <h2 className="md:text-left text-primary underline font-black">{content[0].acf.sections.skills.header}</h2>
        <p className="md:text-left py-8">{content[0].acf.sections.skills.description}</p>
      </div>
      <ul>
        {content[0].acf.sections.skills.skill_sets.map((skill_set, index) =>
          <li className="py-2" key={`${removeSpace(skill_set.title)}`} index={`${removeSpace(skill_set.title)}`}>
            <h3 className="text-primary font-black inline-block pb-2">{skill_set.title}</h3>
            <ul className="list-none inline-block">
              {skill_set.skills.map((skill, index) =>
                <li className="mx-4 skill-slide inline-block border-right border-1 border-primary" key={`${removeSpace(skill.skill)}`} index={`${removeSpace(skill.skill)}`}>
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
