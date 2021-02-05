import React from 'react'
import { useStore, connect } from 'react-redux'

const Experience = () => {
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <div name="Experience" id="#Experience" className="section min-h-screen flex-col p-4 md:p-20">
      <h2 className="min-w-full text-left underline text-yellow">{content[0].acf.sections.experience.header}</h2>
      <p className="py-8 text-left">{content[0].acf.sections.experience.description}</p>
      <div>
        {content[0].acf.sections.experience.jobs.map((job, index) =>
          <div key={index} className={`py-16 ${index !== 0 ? 'border-top border-t-2' : ''}`}>
            <div className="grid grid-flow-col grid-cols-3 gap-4 pb-6">
              <div className={`${index % 2 ? 'md:order-2 md:col-span-2 text-right' : 'md:col-span-1'}`}>
                <h3 className="text-lime">{job.company}</h3>
                <h1 className="text-magenta">{job.title}</h1>
                <p className="text-violet">{job.date_employed}</p>
                <p className="text-gray">{job.location}</p>
                <p className="text-cyan">{job.tech_used}</p>
              </div>
              <div className={`col-span-2 ${index % 2 ? '' : ''}`}>
                <p className="">{job.about}</p>
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
