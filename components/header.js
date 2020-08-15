import React from 'react'
import useGetWPPages from '../hooks/useGetWPPages';
import { useStore, connect } from "react-redux";
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function header() {
  useGetWPPages();
  const { pages } = useStore().getState().wp
  const router = useRouter()
  const content = pages.filter((page) => page.slug === router.pathname.substr(1))

  return (
    <header className="flex justify-center fixed inset-x-0 top-0 bg-black bg-opacity-25">
      {content[0] &&
        <>
          <ul className="flex justify-center">
            {Object.values(content[0].acf.sections).map((section, index) =>
              <li className="mx-3" key={index}>
                <Link href={`#${section.header}`}>
                  <a href={`#${section.header}`} >{section.header}</a>
                </Link>
              </li>
            )}
          </ul>
        </>
      }
    </header>
  )
}
