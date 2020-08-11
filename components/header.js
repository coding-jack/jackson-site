import React from 'react'
import useGetWPPages from '../hooks/useGetWPPages';

export default function header() {
  useGetWPPages();

  return (
    <header className="flex fixed inset-x-0 top-0 bg-black bg-opacity-75">

    </header>
  )
}
