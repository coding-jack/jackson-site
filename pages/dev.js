import React from 'react'
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";
import Header from "../components/Header";


const DevPage = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
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
            <p>{content[0].acf.sections.about.header}</p>
            <p>{content[0].acf.sections.about.description}</p>
          </div>
          <div name="Portfolio" id="#Portfolio" className="section flex-col text-center m-10">
            <p>{content[0].acf.sections.portfolio.header}</p>
            <ul>
              {content[0].acf.sections.portfolio.wordpress.map((project, index) =>
                <li>
                  <p key={index}>{project.image.title}</p>
                </li>
              )}
            </ul>
          </div>
          <div name="Experience" id="#Experience" className="section flex-col text-center m-10">
            <p>{content[0].acf.sections.experience.header}</p>
          </div>
          <div name="Education" id="#Education" className="section flex-col text-center m-10">
            <p>{content[0].acf.sections.education.header}</p>
          </div>
          <div name="Skills" id="#Skills" className="section flex-col text-center m-10">
            <p>{content[0].acf.sections.skills.header}</p>
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
