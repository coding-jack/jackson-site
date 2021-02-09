import React from 'react'
import { useStore, connect } from "react-redux";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MusicAbout from "../components/music/MusicAbout";
import PsychRock from "../components/music/PsychRock";
import Goofball from "../components/music/Goofball";
import BoogieFunk from "../components/music/BoogieFunk";
import SideProjects from "../components/music/SideProjects";
import PhotoGallery from "../components/music/PhotoGallery";

const MusicPage = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "music")

  return (
    <Layout className="music">
      {content[0] &&
        <>
          <Header />
          <MusicAbout />
          <PsychRock />
          <Goofball />
          <BoogieFunk />
          <SideProjects />
          <PhotoGallery />
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
