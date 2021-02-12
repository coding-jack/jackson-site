import React from 'react'
import { useStore, connect } from 'react-redux'

const Education = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <div name="Education" id="#Education" className="section flex-col p-4 md:p-20">
      <h2 className="text-left min-w-full underline text-primary font-black">{content[0].acf.sections.education.header}</h2>
      <p className="text-left pt-8">{content[0].acf.sections.education.description}</p>
      {content[0].acf.sections.education.schools.map((school, index) =>
        <div className={`py-16 ${index !== 0 ? 'border-top border-t-2 border-primary' : ''}`} key={index}>
          <div className="header md:grid grid-flow-col grid-cols-3 gap-4 md:pb-6">
            <div className="job-info md:col-span-2">
              <h3 className="text-primary font-black">{school.name}</h3>
              <p className="">{school.location}</p>
            </div>
            <div className="py-4 md:py-0 enrollment-dates md:col-span-1 md:order-2 md:text-right">
              <p className="text-primary font-black">{school.date}</p>
            </div>
          </div>
          <p className="pb-4 md:pb-2"><span className="text-primary font-black">Certification: </span>{school.certification}</p>
          <p><span className="text-primary font-black">Summary: </span>{school.description}</p>
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
