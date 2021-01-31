import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Particles from 'react-particles-js'
import ParticleComponent from '../components/ParticleComponent'

export default function Home() {
  // const body = document.getElementsByTagName('body');
  // console.log(body)
  function addBgClass() {
    console.log('addClass')
  }
  function removeBgClass() {
    console.log('removeClass');
  }
  return (
    <div>
      <Head>
        <title>Jackson Kaufman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticleComponent />
      <main className="flex flex-col items-center h-screen">
        <h1 className="hello pt-5">Hello</h1>
        <h1 className="heading-1 text-4xl mt-0">which body of work</h1>
        <h1 className="heading-2 text-4xl mt-0">would you like to explore..?</h1>
        <div className="mx-6 flex flex-col">
          <Link href="/dev" className="dev-link relative z-10">
            <a className="card my-20 relative z-10"
              onMouseEnter={addBgClass}
              onMouseLeave={removeBgClass}
            >
              <h3>Dev Work &rarr;</h3>
              <p>Explore Jackson's web development resume and portfolio</p>
            </a>
          </Link>
        </div>
        <div className="mt-auto mb-20">
          <Link href="/music" className="music-link relative z-10">
            <a className="card relative z-10"
              onMouseEnter={addBgClass}
              onMouseLeave={removeBgClass}
            >
              <h3>Music &rarr;</h3>
              <p>See what Jackson has been up to musically</p>
            </a>
          </Link>
        </div>
        <footer className="mt-auto">
          Developed by Jackson Kaufman
      </footer>
      </main>
    </div >
  )
}
