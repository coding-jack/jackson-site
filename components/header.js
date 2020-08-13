import React from 'react'
import useGetWPPages from '../hooks/useGetWPPages';
import { useStore, connect } from "react-redux";


export default function header() {
  useGetWPPages();
  const { pages } = useStore().getState().wp
  const content = pages.filter((page) => page.slug === "dev")

  return (
    <header className="flex justify-center fixed inset-x-0 top-0 bg-black bg-opacity-25">
      <ul className="flex justify-center">
        {Object.values(content[0].acf.sections).map((section, index) =>
          <li className="mx-3" key={index}>{section.header}</li>
        )}
      </ul>
    </header>
  )
}
