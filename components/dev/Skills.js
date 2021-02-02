import React from 'react'
import { useStore, connect } from 'react-redux'

const Skills = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    pauseOnFocus: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    className: 'hover-gradient',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div name="Skills" id="#Skills" className="section flex-col text-center">
      <div className="text-box my-12">
        <h2 className="pl-12 text-left">{content[0].acf.sections.skills.header}</h2>
        <p className="p-12 text-left">{content[0].acf.sections.skills.description}</p>
      </div>
      <ul>
        {content[0].acf.sections.skills.skill_sets.map((skill_set, index) =>
          <li className="py-6" key={index}>
            <h3>{skill_set.title}</h3>
            <div className="flex flex-row justify-center">
              {/* <Slider {...skillsSettings}> */}
              {skill_set.skills.map((skill, index) =>
                <div className="mx-4 skill-slide" key={index} index={index}>
                  <p>{skill.skill}</p>
                </div>
              )}
              {/* </Slider> */}
            </div>
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
