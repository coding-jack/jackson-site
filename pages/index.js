import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Particles from 'react-particles-js'
import ParticleComponent from '../components/ParticleComponent'

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Jackson Kaufman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticleComponent />
      <main className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl mt-0">Which Aspect of Jackson's Life</h1>
        <h1 className="text-4xl mt-0">Do You Want to Explore..?</h1>
        <div className="flex item-center justify-center flex-wrap mt-3 mx-6">
          <Link href="/dev" className="relative z-10">
            <a className="card relative z-10">
              <h3>Dev Work &rarr;</h3>
              <p>Explore Jackson's web development resume and portfolio</p>
            </a>
          </Link>
          <Link href="/music" className="relative z-10">
            <a className="card relative z-10">
              <h3>Music &rarr;</h3>
              <p>See what Jackson has been up to musically</p>
            </a>
          </Link>
        </div>
        <footer className={styles.footer}>
          Developed by Jackson Kaufman
      </footer>
      </main>
    </div >
  )
}
