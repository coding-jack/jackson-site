import React, { useState } from 'react'
import { useStore, connect } from "react-redux";

const Portfolio = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  const divStyle = {
    minHeight: '180px',
  }
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div name="Portfolio" id="#Portfolio" className="flex-col min-h-screen p-4 md:p-20 text-left">
      <h2 className="underline text-primary font-black">{content[0].acf.sections.portfolio.header}</h2>
      <p className="py-8">{content[0].acf.sections.portfolio.description}</p>
      <div className="wp-project-gallery pb-6">
        <h3 className="pb-6 text-primary inline-block font-black">Wordpress</h3>
        <p className="inline-block text-primary pl-4"> &rarr;</p>
        <div style={divStyle} className="gallery grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-3">
          {content[0].acf.sections.portfolio.wordpress
            .slice(0, 3)
            .map((project, index) =>
              <a className="relative photo-wrap" target="_blank" key={project.link} href={project.link}>
                <div
                  key={index}
                  className={`gallery-photo rounded-lg border border-primary bg-top bg-cover cursor-pointer relative hover:opacity-50 duration-500 ${index === 2 ? 'sm:hidden md:block' : ''}`}
                  style={{ backgroundImage: `url('${project.image.url}')` }}
                  alt={project.image.alt}
                />
                <button className="font-black">{project.image.title} »</button>
              </a>
            )}
          {/* {selectedId && (
            <div layoutId={selectedIdentifier}>
            <button onClick={() => setSelectedId(null)} />
            </div>
          )} */}
        </div>
      </div>
      <div className="js-project-gallery">
        <h3 className="pb-6 text-primary inline-block font-black">Javascript</h3>
        <p className="inline-block text-primary pl-4"> &rarr;</p>
        <div style={divStyle} className="gallery grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-3">
          {content[0].acf.sections.portfolio.javascript
            .slice(0, 3)
            .map((project, index) =>
              <a className="relative photo-wrap" target="_blank" key={project.link} href={project.link}>
                <div
                  key={index}
                  className={`gallery-photo rounded-lg border border-primary bg-top bg-cover cursor-pointer hover:opacity-50 duration-500 ${index === 2 ? 'sm:hidden md:block' : ''}`}
                  style={{ backgroundImage: `url('${project.image.url}')` }}
                  alt={project.image.alt}
                />
                <button className="font-black">{project.image.title} »</button>
              </a>
            )}
          {/* {selectedId && (
            <div layoutId={selectedIdentifier}>
              <button onClick={() => setSelectedId(null)} />
            </div>
          )} */}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(Portfolio);

export default Container;
