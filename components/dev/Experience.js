import React from 'react'
import { useStore, connect } from 'react-redux'

const Experience = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <div name="Experience" id="#Experience" className="section min-h-screen flex-col p-4 md:p-20">
      <h2 className="min-w-full text-left underline text-primary">{content[0].acf.sections.experience.header}</h2>
      <p className="pt-8 text-left">{content[0].acf.sections.experience.description}</p>
      <div>
        {content[0].acf.sections.experience.jobs.map((job, index) =>
          <div key={index} className={`py-16 ${index !== 0 ? 'border-top border-t-2 border-primary' : ''}`} key={index}>
            <header className="header grid grid-flow-col grid-cols-2 gap-4 pb-6">
              <div className="job-info md:col-span-1">
                <h3 className="text-primary inline-block">{job.company}</h3>
                <p className="md:inline-block md:pl-4">{job.location}</p>
                <h3 className="text-primary">{job.title}</h3>
              </div>
              <div className="employment-dates md:order-2 md:col-span-1 md:text-right">
                <p className="text-primary">{job.date_employed}</p>
                <p className=""><span className="text-primary">Tech Used: </span>{job.tech_used}</p>
              </div>
            </header>
            <section className="description">
              <p className=""><span className="text-primary">Summary: </span>{job.about}</p>
            </section>
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
