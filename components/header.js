import React from 'react'
import useGetWPPages from '../hooks/useGetWPPages';
import { useStore, connect } from "react-redux";
import Link from 'next/link'
import { useRouter } from 'next/router'


function Header() {
  useGetWPPages();
  const { pages } = useStore().getState().wp
  const router = useRouter()
  const content = pages.filter((page) => page.slug === router.pathname.substr(1))
  function removeSpace(prop) {
    let str = prop
    str = str.replace(/\s/g, '');
    return str;
  }

  console.log(content)
  return (
    <header className="flex justify-center fixed inset-x-0 top-0 bg-black bg-opacity-25">
      {content[0] &&
        <>
          <ul className="flex justify-center">
            <li className="mx-3">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            {Object.values(content[0].acf.sections).map((section, index) =>
              <li className="mx-3" key={index}>
                <Link href={`#${removeSpace(section.header)}`}>
                  <a>{section.header}</a>
                </Link>
              </li>
            )}
          </ul>
        </>
      }
    </header>
  )
}

export default Header;
