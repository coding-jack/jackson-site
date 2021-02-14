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
  function closeHeader() {
    document.addEventListener('click');
    return setIsOn(!isOn);
  }

  return (
    // < !--This example requires Tailwind CSS v2.0 + -->
    <header className={`fixed w-full z-30 ${router.pathname === '/music' ? 'hidden' : ''}`}>
      {content[0] &&
        <>
          <div className="bg-header md:bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0 home-button-wrapper">
                  <Link href="/">
                    <a>
                      <FontAwesomeIcon className="text-primary text-4xl" icon={faTerminal} />
                    </a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <div className="flex items-baseline space-x-4">
                      {Object.values(content[0].acf.sections).map((section) =>
                        <div className="px-3" key={section.header}>
                          <Link href={`#${removeSpace(section.header)}`}>
                            <a className="text-primary font-bold">{section.header}</a>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* <!-- Profile dropdown --> */}
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
                      {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
                      <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                        className={`transition ease-out duration-100 ${isOn ? 'transform opacity-100 block scale-100' : 'transform hidden scale-95'} absolute mt-2 max-w-max text-primary rounded-md shadow-lg py-1 text-center`}
                      >
                        <a href="mailto:jacksonkaufman115@gmail.com" target="_blank"><FontAwesomeIcon className="footer-icon hover:text-yellow duration-200 mt-2 text-2xl" icon={faEnvelope} /></a>
                        <a href="tel:3036531861" target="_blank"><FontAwesomeIcon className="footer-icon hover:text-yellow duration-200 mt-2 text-2xl" icon={faPhone} /></a>
                        <a href="https://github.com/coding-jack" target="_blank"><FontAwesomeIcon className="footer-icon hover:text-yellow duration-200 mt-2 text-2xl" icon={faGithub} /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* <!-- Mobile menu button --> */}
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-red hover:opacity-75 hover:bg-purple hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-checked={isOn}
                    tabIndex="0"
                    onClick={() => setIsOn(!isOn)}
                  // className={`${isOn ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                  >
                    <span
                      className="sr-only"
                    >Open main menu</span>
                    {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                    <svg
                      className={`${isOn ? 'hidden' : 'block'} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
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

            {/* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */}
            <div className={`${isOn ? 'block' : 'hidden'} md:hidden`}>
              <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-primary">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {/* <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a> */}

                {Object.values(content[0].acf.sections).map((section) =>
                  <div className="mx-3 py-2" key={section.header}>
                    <Link href={`#${removeSpace(section.header)}`}>
                      <a className="text-2xl">{section.header}</a>
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
    </header>
  )
}

export default Header;
