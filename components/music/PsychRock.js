import React from 'react'
import { useStore, connect } from 'react-redux'

export const PsychRock = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "music")

  return (
    <div name="PsychedelicRock" id="#PsychedelicRock" className="section flex-col">
      <h2>{content[0].acf.sections.shwarma.header}</h2>
      <p>{content[0].acf.sections.shwarma.description}</p>
      <ul>
        {content[0].acf.sections.shwarma.photos.map((photo, index) =>
          <li key={index}>
            <img src={photo.sizes.medium} alt="" />
          </li>
        )}
      </ul>
      <ul>
        {content[0].acf.sections.shwarma.videos.map((video, index) =>
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

const Container = connect(mapStateToProps)(PsychRock)

export default Container
