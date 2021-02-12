import React from 'react'
import Link from 'next/link'

const MusicPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-primary">
      <h3 className="text-center pb-8">This site is under construction.</h3>
      <a className=" hover:text-yellow duration-200 pb-10" target="_blank" href="https://links.jacksonkaufman.com/">View links to all my music work &rarr;</a>
      <Link href="/">
        <a className=" hover:text-yellow duration-200">
          Go back to the landing page  &rarr;
        </a>
      </Link>
    </div >
  )
}

// const mapStateToProps = (state) => ({
//   pages: state.wp.pages,
// })

// const Container = connect(mapStateToProps)(MusicPage);

export default MusicPage;
