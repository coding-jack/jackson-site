import React from 'react'
import { useStore, connect } from 'react-redux'

export const PhotoGallery = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "music")

  return (
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
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages
})

const Container = connect(mapStateToProps)(PhotoGallery)

export default Container
