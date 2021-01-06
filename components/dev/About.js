import React from 'react'
import { useStore, connect } from 'react-redux'

const About = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <div name="About" id="#About" className="p-12">
      <h2>{content[0].acf.sections.about.header}</h2>
      <div className="grid grid-cols-4">
        <div className="col-span-2 relative">
          <img className="relative z-10 hover:opacity-0 transition duration-500 ease-in-out" src={content[0].acf.sections.about.featured_image_1.sizes.large} alt="" />
          <p className="z-0 absolute inset-0 text-center p-auto">{content[0].acf.sections.about.description_1}</p>
        </div>
        <div className="col-span-2 relative">
          <img className="relative z-10 hover:opacity-0 transition duration-500 ease-in-out" src={content[0].acf.sections.about.featured_image_2.sizes.large} alt="" />
          <p className="z-0 absolute inset-0 text-center p-auto">{content[0].acf.sections.about.description_2}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(About);

export default Container;
