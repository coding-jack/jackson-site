import React from 'react'
import { useStore, connect } from "react-redux";
import Image from 'next/image'

const DevHero = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  const heroBgStyle = {
    backgroundImage: `url('images/dev-bg-square.jpg')`,
  }

  return (
    <div className="hero relative" style={heroBgStyle}>
      <h3 className="pt-20">I like to create interactive experiences</h3>
      <h3>with modern tech.</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 relative bottom-0 mt-48">
        <div className="md:col-span-2"></div>
        <div className="col-span-1">
          <div className="img-wrap rounded-full relative rounded-full">
            <Image
              className="absolute z-10 hover:opacity-0 transition duration-500 ease-in-out ring-4 rounded-full"
              src={content[0].acf.featured_picture.url}
              alt={content[0].acf.featured_tagline}
              width={400}
              height={400}
            />
            <p className="absolute inset-text text-center">{content[0].acf.sections.about.description_1}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(DevHero);

export default Container;
