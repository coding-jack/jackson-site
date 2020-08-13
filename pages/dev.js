import React from 'react'
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";
import Header from "../components/Header";
import Link from 'next/link'


const DevPage = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  // const backgroundUrl = content[0].acf.featured_picture.link
  // const backgroundStyle = {
  //   backgroundImage: `url(${content[0].acf.featured_picture.link})`,
  // }

  console.log(content)
  return (
    <Layout className="dev">
      {content[0] &&
        <>
          <header className="flex justify-center fixed inset-x-0 top-0 bg-black bg-opacity-25">
            {content[0] &&
              <>
                <ul className="flex justify-center">
                  {Object.values(content[0].acf.sections).map((section, index) =>
                    <li className="mx-3" key={index}>
                      <a href={`/dev/#${section.header}`}>{section.header}</a>
                    </li>
                  )}
                </ul>
              </>
            }
          </header>
          <div className="flex justify-center items-center min-h-screen">
            <h1>Dev page</h1>
          </div>
          <div id="#About" className="flex justify-center flex-col text-center m-10">
            <p>{content[0].acf.sections.about.header}</p>
            <p>{content[0].acf.sections.about.description}</p>
          </div>
          <div id="#Portfolio" className="flex justify-center flex-col text-center m-10">
            <p>{content[0].acf.sections.portfolio.header}</p>
            <ul>
              {content[0].acf.sections.portfolio.wordpress.map((project, index) =>
                <li>
                  <p key={index}>{project.image.title}</p>
                </li>
              )}
            </ul>
          </div>
          <div id="#Experience" className="flex justify-center flex-col text-center m-10">
            <p>{content[0].acf.sections.experience.header}</p>
          </div>
          <div id="#Education" className="flex justify-center flex-col text-center m-10">
            <p>{content[0].acf.sections.education.header}</p>
          </div>
          <div id="#Skills" className="flex justify-center flex-col text-center m-10">
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
