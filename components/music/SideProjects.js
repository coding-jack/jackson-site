import React from 'react'
import { useStore, connect } from 'react-redux'

export const SideProjects = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "music")

  return (
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

  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages
})

const Container = connect(mapStateToProps)(SideProjects)

export default Container
