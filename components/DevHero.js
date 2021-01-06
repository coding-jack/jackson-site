import React from 'react'
import { useStore, connect } from "react-redux";

const DevHero = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <div>
      Hero
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

// const Container = connect(mapStateToProps)(DevHero);

export default Container;
