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
      <div className="lg:grid grid-cols-3">
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <div className="img-wrap relative rounded-full bottom-0 right-0">
            <Image
              className="z-10 hover:opacity-0 transition duration-500 ease-in-out"
              src={content[0].acf.sections.about.featured_image_1.url}
              alt={content[0].acf.sections.about.featured_image_1.alt}
              width={300}
              height={300}
            />
            <p className="absolute inset-0 text-center p-auto">{content[0].acf.sections.about.description_2}</p>
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
