import React from 'react'
import { useStore, connect } from 'react-redux'

export const Goofball = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "music")

  return (
    <div name="FunFunkyFolk" id="#FunFunkyFolk" className="section flex-col">
      <h2>{content[0].acf.sections.gb.header}</h2>
      <p>{content[0].acf.sections.gb.description}</p>
      <ul>
        {content[0].acf.sections.gb.photos.map((photo, index) =>
          <li key={index}>
            <img src={photo.sizes.medium} alt="" />
          </li>
        )}
      </ul>
      <ul>
        {content[0].acf.sections.gb.videos.map((video, index) =>
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

const Container = connect(mapStateToProps)(Goofball)

export default Container
