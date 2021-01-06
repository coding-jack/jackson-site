import React, { useState } from 'react'
import { useStore, connect } from "react-redux";
import Lightbox from 'react-image-lightbox';
import { motion, useViewportScroll, AnimatePresence, AnimateSharedLayout, useAnimation } from "framer-motion";

const GalleryProjects = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")
  const divStyle = {
    minHeight: '480px',
  }
  const [selectedId, setSelectedId] = useState(null)
  const { scrollYProgress } = useViewportScroll()
  const controls = useAnimation()

  return (
    <div name="Portfolio" id="#Portfolio" className="flex-col min-h-screen p-20 text-center">
      <h2>{content[0].acf.sections.portfolio.header}</h2>
      <p className="p-12">{content[0].acf.sections.portfolio.description}</p>
      <div className="project-gallery">
        {content[0] &&
          <>
            <div style={divStyle} className="grid md:grid-cols-3 md:grid-rows-2 gap-6 mb-10">
              <AnimateSharedLayout type="crossfade">
                {content[0].acf.sections.portfolio.wordpress
                  .slice(0, 3)
                  .map((project, index) =>
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1, controls }}
                      layoutId={project.index}
                      onClick={() => setSelectedId(project.index)}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 2
                      }}
                      className={`gallery-photo rounded-lg border border-red bg-center bg-cover cursor-pointer relative`}
                      style={{ backgroundImage: `url('${project.image.url}')` }}
                      alt={project.image.alt}
                    />
                  )}
                <AnimatePresence>
                  {selectedId && (
                    <motion.div layoutId={selectedIdentifier}>
                      <motion.button onClick={() => setSelectedId(null)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </AnimateSharedLayout>
            </div>
          </>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(GalleryProjects);

export default Container;
