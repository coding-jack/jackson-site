import Head from 'next/head'
import Link from 'next/link'
import ParticleComponent from '../components/ParticleComponent'

export default function Home() {
  return (
    <div className="text-primary">
      <Head>
        <title>Jackson Kaufman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticleComponent />
      <main className="flex flex-col items-center h-screen">
        <h1 className="hello pt-5">Hello</h1>
        <h1 className="heading-1 text-2xl md:text-4xl mt-0">which body of work</h1>
        <h1 className="heading-2 text-2xl md:text-4xl mt-0">would you like to explore..?</h1>
        <div className="mx-6 flex flex-col">
          <Link href="/dev" className="dev-link relative z-10">
            <a className="card mt-40 relative z-10 hover:text-yellow">
              <h3>Dev Work &rarr;</h3>
              <p className="dev-text">Explore Jackson's web development resume and portfolio</p>
            </a>
          </Link>
        </div>
        <div className="mt-auto mb-20">
          <Link href="/music" className="music-link relative z-10">
            <a className="card inline-block relative z-10 hover:text-yellow">
              <h3>Music &rarr;</h3>
              <p className="music-text">See what Jackson has been up to musically</p>
            </a>
          </Link>
        </div>
        <div className="mt-auto mb-4">
          <p>Developed by Jackson Kaufman</p>
        </div>
      </main>
    </div >
  )
}
