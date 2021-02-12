import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer className="text-primary p-4 md:px-20 md:py-10">
      <div className="inline-block">
        <p className="md:inline-block">Developed by Jackson Kaufman</p>
        <p className="md:pl-6 md:inline-block">View the source code <a className="hover:text-yellow duration-200 cursor-pointer" href="https://github.com/coding-jack/jackson-site" target="_blank">here</a></p>
      </div>
      <div className="inline-block float-right">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </footer>
  )
}

export default Footer
