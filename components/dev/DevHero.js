import React from 'react'
import { useStore, connect } from "react-redux";

const DevHero = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  const heroBgStyle = {
    backgroundImage: `url('images/dev-bg-square.jpg')`,
  }

  return (
    <div className="hero relative" style={heroBgStyle}>
      <div className="container p-4 md:p-20">
        <h3 className="pt-20 text-primary">I like to paint slick UI's</h3>
        <h3 className="text-primary">with modern tech.</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 relative bottom-0 mt-64 md:mt-48">
          <div className="md:col-span-2"></div>
          <div className="col-span-1">
            <div className="img-wrap rounded-full relative rounded-full ml-auto">
              <img
                className="hover-image relative z-20 hover:opacity-0 duration-500 rounded-full border-opacity-100 border-primary border-2"
                src={content[0].acf.featured_picture.url}
                alt={content[0].acf.featured_picture.alt}
              />
              <p className="absolute inset-text text-center hidden sm:block text-yellow z-10">{content[0].acf.featured_tagline}</p>
            </div>
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
