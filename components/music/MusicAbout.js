import React from 'react'
import { useStore, connect } from 'react-redux'

export const MusicAbout = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "music")

  return (
    <div name="About" id="#About" className="section flex-col justify-center about">
      <h2>{content[0].acf.sections.about.header}</h2>
      <img src={content[0].acf.featured_picture.sizes.medium} alt="" />
      <p>{content[0].acf.sections.about.description}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages
})

const Container = connect(mapStateToProps)(MusicAbout)

export default Container
