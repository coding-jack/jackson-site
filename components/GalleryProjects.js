import React, { useState } from 'react'
import { useStore, connect } from "react-redux";
import Lightbox from 'react-image-lightbox';

const GalleryProjects = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const divStyle = {
    minHeight: '760px',
  }

  function setIndexAndOpen(index) {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  return (
    <div className="container mb-10">
      {content[0] &&
        <>
          <div
            style={divStyle}
            className="grid md:grid-cols-2 md:grid-rows-2 gap-6 mb-10"
          >
            {content[0].acf.sections.portfolio.wordpress
              .slice(0, 3)
              .map((project, index) =>
                <div
                  onClick={() => setIndexAndOpen(index)}
                  className={`gallery-photo border border-red bg-center bg-cover cursor-pointer relative ${index === 0 ? 'md:row-start-1 md:row-end-3' : ''}`}
                  style={{ backgroundImage: `url('${project.image.url}')` }}
                  alt={project.image.alt}
                >
                  <div className="uppercase label-full-size transition-opacity duration-200 opacity-0 bg-red absolute bottom-0 right-0 p-3">
                    full size +
                  </div>
                </div>
              )}
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={content[0].acf.sections.portfolio.wordpress[photoIndex].image.url}
              nextSrc={content[0].acf.sections.portfolio.wordpress[(photoIndex + 1) % content[0].acf.sections.portfolio.wordpress.length].image.url}
              prevSrc={content[0].acf.sections.portfolio.wordpress[(photoIndex + content[0].acf.sections.portfolio.wordpress.length - 1) % content[0].acf.sections.portfolio.wordpress.length].image.url}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + content[0].acf.sections.portfolio.wordpress.length - 1) % content[0].acf.sections.portfolio.wordpress.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % content[0].acf.sections.portfolio.wordpress.length)
              }
            />
          )}
          {content[0].acf.sections.portfolio.wordpress.length > 3 &&
            <button
              onClick={() => setIndexAndOpen(3)}
              className="text-red mx-auto cursor-pointer uppercase inline-block border border-red flex items-center justify-center opacity-50-transition hover:opacity-100 w-32 p-3 mb-3"
            >More Projects</button>
          }
        </>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(GalleryProjects);

export default Container;
