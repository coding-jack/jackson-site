import React from 'react'
import Link from 'next/link'

const MusicPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h3 className="text-center pb-8">This site is under construction still....</h3>
      <Link href="/" className="hover:text-primary">
        Go back to the landing page  &rarr;
      </Link>
    </div >
  )
}

// const mapStateToProps = (state) => ({
//   pages: state.wp.pages,
// })

// const Container = connect(mapStateToProps)(MusicPage);

export default MusicPage;
