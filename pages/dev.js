import React from 'react'
import Layout from "../components/Layout";
import { useStore, connect } from "react-redux";

const DevPage = () => {
  const { pages } = useStore().getState().wp

  console.log(pages)
  return (
    <Layout className="dev">
      <div>
        Dev Page
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(DevPage);

export default Container;
