import React from 'react'
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";

const DevPage = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  const backgroundUrl = content[0].acf.featured_picture.link
  const backgroundStyle = {
    backgroundImage: `url(${backgroundUrl})`,
  }

  console.log(content)
  console.log(backgroundStyle)
  return (
    <Layout className="dev">
      <div className="flex justify-center items-center min-h-screen" style={backgroundStyle}>
        <h1>Dev page</h1>
      </div>
      <div className="flex justify-center m-10">
        <p>{content[0].acf.sections.about.description}</p>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(DevPage);

export default Container;
