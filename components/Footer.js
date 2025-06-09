import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer className="container text-primary pb-5 md:px-20 md:py-10 text-center md:text-left">
      <div className="md:inline-block">
        <p className="">This is a Headless CMS built with Next.js, WordPress, Redux and Tailwind.</p>
        <p className="md:inline-block">It was developed by Jackson Kaufman</p>
        <p className="md:pl-6 md:inline-block">View the source code <a className="hover:text-yellow duration-200 cursor-pointer underline" href="https://github.com/coding-jack/jackson-site" target="_blank">here</a></p>
      </div>
      <div className="md:inline-block md:float-right mt-4 md:mt-0">
        <a href="mailto:jacksonkaufman115@gmail.com" target="_blank"><FontAwesomeIcon className="footer-icon hover:text-yellow duration-200" icon={faEnvelope} /></a>
        <a href="tel:3036531861" target="_blank"><FontAwesomeIcon className="footer-icon hover:text-yellow duration-200" icon={faPhone} /></a>
        <a href="https://github.com/coding-jack" target="_blank"><FontAwesomeIcon className="footer-icon hover:text-yellow duration-200" icon={faGithub} /></a>
      </div>
    </footer>
  )
}

export default Footer
