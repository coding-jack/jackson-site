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
          <div className="section justify-center about">
            {/* <h1>{content[0].acf.sections.about.header}</h1> */}
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
