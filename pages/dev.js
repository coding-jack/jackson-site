import React from 'react'
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";
import Header from "../components/Header";
import Slider from "react-slick";
import Lightbox from 'react-image-lightbox';
import GalleryProjects from '../components/GalleryProjects'


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

  const heroBgStyle = {
    backgroundImage: `url('images/dev-bg-square.jpg')`,
    zIndex: '-1000'
  }

  return (
    <Layout className="dev">
      {content[0] &&
        <>
          <Header />
          <div className="hero" style={heroBgStyle}>
            <h3 className="pt-20">I like to create interactive experiences</h3>
            <h3>with modern tech.</h3>
          </div>
          <div name="About" id="#About" className="p-12">
            <h2>{content[0].acf.sections.about.header}</h2>
            <div className="grid grid-cols-4">
              <div className="col-span-2 relative">
                <img className="relative z-10 hover:opacity-0 transition duration-500 ease-in-out" src={content[0].acf.sections.about.featured_image_1.sizes.large} alt="" />
                <p className="z-0 absolute inset-0 text-center p-auto">{content[0].acf.sections.about.description_1}</p>
              </div>
              <div className="col-span-2 relative">
                <img className="relative z-10 hover:opacity-0 transition duration-500 ease-in-out" src={content[0].acf.sections.about.featured_image_2.sizes.large} alt="" />
                <p className="z-0 absolute inset-0 text-center p-auto">{content[0].acf.sections.about.description_2}</p>
              </div>
            </div>
          </div>
          <GalleryProjects />
          <div name="Experience" id="#Experience" className="section flex-col text-center">
            <h2>{content[0].acf.sections.experience.header}</h2>
            <p className="p-12">{content[0].acf.sections.experience.description}</p>
            <div>
              {content[0].acf.sections.experience.jobs.map((job, index) =>
                <div key={index} className="py-5">
                  <div className="title pb-5">
                    <h3 className="">{job.title}</h3>
                  </div>
                  <div className="grid grid-flow-col grid-cols-3 gap-4 pb-6">
                    <div className={`my-auto ${index % 2 ? 'md:order-2 md:col-span-2' : 'md:col-span-1'}`}>
                      <p>{job.company}</p>
                      <p>{job.location}</p>
                      <p>{job.date_employed}</p>
                      <p>{job.tech_used}</p>
                    </div>
                    <div className="col-span-2">
                      <p>{job.about}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
