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

  console.log(content)
  return (
    <Layout className="dev">
      {content[0] &&
        <>
          <Header />
          <div className="flex justify-center items-center min-h-screen">
            <h1>Dev page</h1>
          </div>
          <div className="flex justify-center m-10">
            <p>{content[0].acf.sections.about.description}</p>
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
