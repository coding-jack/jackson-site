import React from 'react'
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";
import MusicAbout from "../components/music/MusicAbout";
import PsychRock from "../components/music/PsychRock";
import Goofball from "../components/music/Goofball";

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
          <div name="BoogieFunk" id="#BoogieFunk" className="section flex-col">
            <h2>{content[0].acf.sections.sbc.header}</h2>
            <p>{content[0].acf.sections.sbc.description}</p>
            <ul>
              {content[0].acf.sections.sbc.photos.map((photo, index) =>
                <li key={index}>
                  <img src={photo.sizes.medium} alt="" />
                </li>
              )}
            </ul>
            <ul>
              {content[0].acf.sections.sbc.videos.map((video, index) =>
                <li key={index}>
                  <span dangerouslySetInnerHTML={{ __html: video.video }} />
                </li>
              )}
            </ul>
          </div>
          <div name="SideProjects" id="#SideProjects" className="section flex-col">
            <h2>{content[0].acf.sections.other.header}</h2>
            <p>{content[0].acf.sections.other.description}</p>
            <ul>
              {content[0].acf.sections.other.photos.map((photo, index) =>
                <li key={index}>
                  <img src={photo.sizes.medium} alt="" />
                </li>
              )}
            </ul>
            <ul>
              {content[0].acf.sections.other.videos.map((video, index) =>
                <li key={index}>
                  <span dangerouslySetInnerHTML={{ __html: video.video }} />
                </li>
              )}
            </ul>
          </div>
          <div name="PhotoGallery" id="#PhotoGallery" className="section flex-col">
            <h2>{content[0].acf.sections.gallery.header}</h2>
            <ul>
              {content[0].acf.sections.gallery.gallery.map((photo, index) =>
                <li key={index}>
                  <img src={photo.sizes.medium} alt="" />
                </li>
              )}
            </ul>
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
