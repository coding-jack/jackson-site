import React from 'react'
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";
import Header from "../components/Header";
import Hero from "../components/dev/DevHero";
import About from "../components/dev/About";
import Experience from "../components/dev/Experience";
import Education from "../components/dev/Education";
import GalleryProjects from '../components/dev/GalleryProjects'


const DevPage = () => {
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
  const skillsSettings = {
    infinite: true,
    autoplay: true,
    autoplayspeed: 1,
    speed: 8000,
    arrows: false,
    variablewidth: true,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  return (
    <Layout className="dev">
      {content[0] &&
        <>
          <Header />
          <Hero />
          <GalleryProjects />
          <About />
          <Experience />
          <Education />
          <div name="Skills" id="#Skills" className="section flex-col text-center">
            <div className="text-box m-12 px-16">
              <h2>{content[0].acf.sections.skills.header}</h2>
              <p className="p-12">{content[0].acf.sections.skills.description}</p>
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
        </>
      }
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(DevPage);

export default Container;
