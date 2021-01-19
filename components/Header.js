import { useState } from 'react'
import useGetWPPages from '../hooks/useGetWPPages';
import { useStore, connect } from "react-redux";
import Link from 'next/link'
import { useRouter } from 'next/router'


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
    // <header className="flex justify-center fixed inset-x-0 top-0 bg-black bg-opacity-25">
    //   {content[0] &&
    //     <>
    //       <ul className="flex justify-center">
    //         <li className="mx-3">
    //           <Link href="/">
    //             <a>Home</a>
    //           </Link>
    //         </li>
    //         {Object.values(content[0].acf.sections).map((section, index) =>
    //           <li className="mx-3" key={index}>
    //             <Link href={`#${removeSpace(section.header)}`}>
    //               <a>{section.header}</a>
    //             </Link>
    //           </li>
    //         )}
    //       </ul>
    //     </>
    //   }
    // </header>
    // < !--This example requires Tailwind CSS v2.0 + -->
    <header className="fixed w-full">
      {content[0] &&
        <div className="bg-black md:bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {Object.values(content[0].acf.sections).map((section) =>
                      <div className="mx-3" key={section.header}>
                        <Link href={`#${removeSpace(section.header)}`}>
                          <a>{section.header}</a>
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
                        <img className="h-8 w-8 rounded-full" src="/images/ResumePic.jpg" alt="" />
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
                      className={`transition ease-out duration-100 ${isOn ? 'transform opacity-100 block scale-100' : 'transform hidden scale-95'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}
                    >
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              {/* <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a> */}

              {Object.values(content[0].acf.sections).map((section) =>
                <div className="mx-3" key={section.header}>
                  <Link href={`#${removeSpace(section.header)}`}>
                    <a>{section.header}</a>
                  </Link>
                </div>
              )}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                  <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
              </div>
            </div>
          </div>
        </div>
      }
    </header>
  )
}

export default Header;
