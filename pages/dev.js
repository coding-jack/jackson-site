import React from 'react'
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";
import Header from "../components/Header";
import Hero from "../components/dev/DevHero";
import About from "../components/dev/About";
import Experience from "../components/dev/Experience";
import Education from "../components/dev/Education";
import Skills from "../components/dev/Skills";
import GalleryProjects from '../components/dev/GalleryProjects'


const DevPage = () => {
  return (
    <Layout className="dev">
      <>
        <Header />
        <Hero />
        <GalleryProjects />
        <About />
        <Experience />
        <Education />
        <Skills />
      </>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(DevPage);

export default Container;
