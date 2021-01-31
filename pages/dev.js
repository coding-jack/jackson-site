import React from 'react'
import { useStore, connect } from "react-redux";
import Layout from "../components/Layout";
import Hero from "../components/dev/DevHero";
import About from "../components/dev/About";
import Experience from "../components/dev/Experience";
import Education from "../components/dev/Education";
import Skills from "../components/dev/Skills";
import GalleryProjects from '../components/dev/GalleryProjects'


const DevPage = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <Layout className="dev">
      {content[0] &&
        <>
          <Hero />
          <GalleryProjects />
          <Experience />
          <Education />
          <Skills />
          <About />
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
