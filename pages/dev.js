import React from 'react'
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";
import Header from "../components/Header";
import Slider from "react-slick";


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
  // const backgroundUrl = content[0].acf.featured_picture.link
  // const backgroundStyle = {
  //   backgroundImage: `url(${content[0].acf.featured_picture.link})`,
  // }

  return (
    <Layout className="dev">
      {content[0] &&
        <>
          <Header />
          <div className="section justify-center">
            <h1>Dev page</h1>
          </div>
          {/* <img src={backgroundUrl} alt="" /> */}
          <div name="About" id="#About" className="section flex-col text-center">
            <h2>{content[0].acf.sections.about.header}</h2>
            <p className="p-12">{content[0].acf.sections.about.description}</p>
            <img src={content[0].acf.sections.about.featured_image_1.sizes.medium} alt="" />
            <img src={content[0].acf.sections.about.featured_image_2.sizes.medium} alt="" />
          </div>
          <div name="Portfolio" id="#Portfolio" className="flex-col min-h-screen p-20 text-center">
            <h2>{content[0].acf.sections.portfolio.header}</h2>
            <p className="p-12">{content[0].acf.sections.portfolio.description}</p>
            <Slider {...settings}>
              {content[0].acf.sections.portfolio.wordpress.map((project, index) =>
                <div className="project-slide p-6 cursor-pointer" index={index} key={index}>
                  <a href={project.link}>
                    <div className="project-wrap">
                      <img className="mx-auto mb-6 project-image" src={project.image.sizes.medium} alt="" />
                      <h3 className="mb-4">{project.image.title}</h3>
                      <p className="px-6">{project.image.description}</p>
                    </div>
                  </a>
                </div>
              )}
            </Slider>
          </div>
          <div name="Experience" id="#Experience" className="section flex-col text-center">
            <h2>{content[0].acf.sections.experience.header}</h2>
            <p className="p-12">{content[0].acf.sections.experience.description}</p>
            <ul>
              {content[0].acf.sections.experience.jobs.map((job, index) =>
                <li key={index}>
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                  <p>{job.location}</p>
                  <p>{job.date_employed}</p>
                  <p>{job.tech_used}</p>
                  <p>{job.about}</p>
                </li>
              )}
            </ul>
          </div>
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
          <div name="Skills" id="#Skills" className="section flex-col text-center">
            <div className="text-box m-12 px-16">
              <h2>{content[0].acf.sections.skills.header}</h2>
              <p className="p-12">{content[0].acf.sections.skills.description}</p>
            </div>
            <ul>
              {content[0].acf.sections.skills.skill_sets.map((skill_set, index) =>
                <li className="py-6" key={index}>
                  <h3>{skill_set.title}</h3>
                  <ul className="flex flex-row justify-center">
                    {skill_set.skills.map((skill, index) =>
                      <li className="mx-4" key={index}>
                        <p>{skill.skill}</p>
                      </li>
                    )}
                  </ul>
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
