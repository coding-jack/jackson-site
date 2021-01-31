import React from 'react'
import { useStore, connect } from "react-redux";
import Image from 'next/image'

const DevHero = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  const heroBgStyle = {
    backgroundImage: `url('images/dev-bg-square.jpg')`,
    zIndex: '-1000'
  }

  return (
    <div className="hero relative" style={heroBgStyle}>
      <h3 className="pt-20">I like to create interactive experiences</h3>
      <h3>with modern tech.</h3>
      <Image
        className=" hover:opacity-0 transition duration-500 ease-in-out"
        src={content[0].acf.sections.about.featured_image_1.url}
        alt="Picture of the author"
        width={300}
        height={300}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(DevHero);

export default Container;
