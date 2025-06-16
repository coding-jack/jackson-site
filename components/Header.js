import { useState } from 'react'
import useGetWPPages from '../hooks/useGetWPPages';
import { useStore, connect } from "react-redux";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Header() {
  useGetWPPages();
  const [isOn, setIsOn] = useState(false)
  const { pages } = useStore().getState().wp
  const router = useRouter()
  const content = pages.filter((page) => page.slug === router.pathname.substr(1))
  function removeSpace(prop) {
    return prop.replace(/\s/g, '');
  }


  return (
    <header className={`fixed w-full z-30 ${router.pathname === '/music' ? 'hidden' : ''}`}>
      {content[0] &&
        <>
          <div className="bg-header md:bg-opacity-50">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0 home-button-wrapper">
                  <Link href="/">
                      <FontAwesomeIcon className="text-primary text-4xl" icon={faTerminal} />
                  </Link>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <div className="flex items-baseline space-x-4">
                      {Object.values(content[0].acf.sections).map((section) =>
                        <div className="px-3" key={section.header}>
                          <Link  className="text-primary font-bold" href={`#${removeSpace(section.header)}`}>
                            {section.header}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <div className="ml-3 relative">
                      <div>
                        <button
                          className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          id="user-menu"
                          aria-haspopup="true"
                          aria-checked={isOn}
                          tabIndex="0"
                          onClick={() => setIsOn(!isOn)}
                        >
                          <span className="sr-only">Open user menu</span>
                          <img className="h-10 w-10 rounded-full" src="/images/ResumePic.jpg" alt="" />
                        </button>
                      </div>
                      <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                        className={`transition ease-out duration-100 ${isOn ? 'transform opacity-100 block scale-100' : 'transform hidden scale-95'} absolute mt-2 max-w-max text-primary rounded-md shadow-lg py-1 text-center`}
                      >
                        <a href="mailto:jacksonkaufman115@gmail.com" target="_blank"><FontAwesomeIcon className="header-icon-open hover:text-yellow duration-200 mt-1 text-2xl" icon={faEnvelope} /></a>
                        <a href="tel:3036531861" target="_blank"><FontAwesomeIcon className="header-icon-open hover:text-yellow duration-200 mt-4 text-2xl" icon={faPhone} /></a>
                        <a href="https://github.com/coding-jack" target="_blank"><FontAwesomeIcon className="header-icon-open hover:text-yellow duration-200 mt-4 text-2xl" icon={faGithub} /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-red hover:opacity-75 hover:bg-purple hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-checked={isOn}
                    tabIndex="0"
                    onClick={() => setIsOn(!isOn)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className={`${isOn ? 'hidden' : 'block'} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg
                      className={`${isOn ? 'block' : 'hidden'} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${isOn ? 'block' : 'hidden'} md:hidden`}>
              <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-primary">
                {Object.values(content[0].acf.sections).map((section) =>
                  <div className="mx-3 py-2" key={section.header}>
                    <Link className="text-2xl" href={`#${removeSpace(section.header)}`}>
                      {section.header}
                    </Link>
                  </div>
                )}
              </div>
              <div className="pt-4 py-3 border-t border-primary">
                <div className="flex items-center px-5 pt-4">
                  <div className="flex-shrink-0">
                    <img className="h-20 w-20 rounded-full" src="/images/ResumePic.jpg" alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-medium leading-none text-gray">Jackson Kaufman</div>
                    <div className="text-xl font-medium leading-none text-primary mt-2">Web Developer</div>
                  </div>
                </div>
                <div className="mt-3 px-6 pt-4 my-4 text-primary flex justify-around items-end text-3xl">
                  <a href="mailto:jacksonkaufman115@gmail.com" target="_blank"><FontAwesomeIcon className="header-icon hover:text-yellow duration-200 mt-2" icon={faEnvelope} /></a>
                  <a href="tel:3036531861" target="_blank"><FontAwesomeIcon className="header-icon hover:text-yellow duration-200 mt-2" icon={faPhone} /></a>
                  <a href="https://github.com/coding-jack" target="_blank"><FontAwesomeIcon className="header-icon hover:text-yellow duration-200 mt-2" icon={faGithub} /></a>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </header >
  )
}

export default Header;
