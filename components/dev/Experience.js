import React from 'react'
import { useStore, connect } from 'react-redux'

const Experience = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <div name="Experience" id="#Experience" className="section flex-col text-center">
      <h2>{content[0].acf.sections.experience.header}</h2>
      <p className="p-12">{content[0].acf.sections.experience.description}</p>
      <div>
        {content[0].acf.sections.experience.jobs.map((job, index) =>
          <div key={index} className="py-5">
            <div className="title pb-5">
              <h3 className="">{job.title}</h3>
            </div>
            <div className="grid grid-flow-col grid-cols-3 gap-4 pb-6">
              <div className={`my-auto ${index % 2 ? 'md:order-2 md:col-span-2' : 'md:col-span-1'}`}>
                <p className="text-lime">{job.company}</p>
                <p className="text-purple">{job.location}</p>
                <p>{job.date_employed}</p>
                <p className="text-magenta">{job.tech_used}</p>
              </div>
              <div className="col-span-2">
                <p>{job.about}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pages: state.wp.pages,
})

const Container = connect(mapStateToProps)(Experience);

export default Container;
