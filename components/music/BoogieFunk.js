import React from 'react'
import { useStore, connect } from 'react-redux'

export const BoogieFunk = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "music")

  return (
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

  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages
})

const Container = connect(mapStateToProps)(BoogieFunk)

export default Container
