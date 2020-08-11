import React from 'react'
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";

const DevPage = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  console.log(content)
  return (
    <Layout className="dev">
      <div>
        Dev Page
         <p className="white"></p>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(DevPage);

export default Container;
