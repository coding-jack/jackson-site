import React from 'react'
import { useStore, connect } from 'react-redux'

const Education = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <div className="section flex-col p-4 md:px-20 md:pt-20 relative">
      <div className="nav-marker" name="Education" id="#Education"></div>
      <h2 className="text-left min-w-full text-primary font-black">{content[0].acf.sections.education.header}</h2>
      <p className="text-left pt-8">{content[0].acf.sections.education.description}</p>
      {content[0].acf.sections.education.schools.map((school, index) =>
        <div className={`py-16 ${index !== 0 ? 'border-top border-t-2 border-primary' : ''}`} key={index}>
          <div className="header md:grid grid-flow-col grid-cols-3 gap-4 md:pb-6">
            <div className="job-info md:col-span-2">
              <h3 className="text-primary font-bold cursor-pointer">
                <a href={school.link} target="_blank">{school.name}</a>
              </h3>
              <p className="">{school.location}</p>
            </div>
            <div className="py-4 md:py-0 enrollment-dates md:col-span-1 md:order-2 md:text-right">
              <p className="text-primary font-bold">{school.date}</p>
            </div>
          </div>
          <p className="pb-4 md:pb-2"><span className="text-primary font-bold">Certification: </span>{school.certification}</p>
          <p><span className="text-primary font-bold">Summary: </span>{school.description}</p>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(Education);

export default Container;
