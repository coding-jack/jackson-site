import React from 'react'
import { useStore, connect } from 'react-redux'

const Experience = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <div className="section min-h-screen flex-col p-4 md:px-20 md:pt-20 relative">
      <div className="nav-marker" id="#Experience" name="Experience"></div>
      <h2 className="min-w-full text-left underline text-primary font-black">{content[0].acf.sections.experience.header}</h2>
      <p className="pt-8 text-left">{content[0].acf.sections.experience.description}</p>
      <div>
        {content[0].acf.sections.experience.jobs.map((job, index) =>
          <div key={index} className={`py-16 ${index !== 0 ? 'border-top border-t-2 border-primary' : ''}`} key={index}>
            <header className="header sm:grid grid-flow-col grid-cols-2 gap-4 pb-6">
              <div className="job-info md:col-span-1">
                <h3 className="text-primary inline-block font-black">{job.company}</h3>
                <p className="inline-block pl-4">{job.location}</p>
                <h3 className="text-primary font-black">{job.title}</h3>
              </div>
              <div className="employment-datess md:order-2 md:col-span-1 pt-4 sm:pt-0 sm:text-right mt-auto">
                <p className="text-primary font-black">{job.date_employed}</p>
                <p className=""><span className="text-primary font-black">Tech Used: </span>{job.tech_used}</p>
              </div>
            </header>
            <section className="description">
              <p className=""><span className="text-primary font-black">Summary: </span>{job.about}</p>
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
