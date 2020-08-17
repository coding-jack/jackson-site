import React from 'react'
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";

const MusicPage = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "music")

  console.log(content)
  return (
    <Layout className="music">
      {content[0] &&
        <>
          <Header />
          <div name="About" id="#About" className="section justify-center about">
            <h1>{content[0].acf.sections.about.header}</h1>
          </div>
          <div name="PsychedelicRock" id="#PsychedelicRock" className="section">
            <h1>{content[0].acf.sections.shwarma.header}</h1>
          </div>
          <div name="FunFunkyFolk" id="#FunFunkyFolk" className="section">
            <h1>{content[0].acf.sections.gb.header}</h1>
          </div>
          <div name="BoogieFunk" id="#BoogieFunk" className="section">
            <h1>{content[0].acf.sections.sbc.header}</h1>
          </div>
          <div name="SideProjects" id="#SideProjects" className="section">
            <h1>{content[0].acf.sections.other.header}</h1>
          </div>
        </>
      }
    </Layout >
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(MusicPage);

export default Container;
