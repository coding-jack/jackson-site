import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Particles from 'react-particles-js';

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Jackson Kaufman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="particles absolute h-screen w-screen z-0">
        <Particles
          className="absolute h-screen w-screen z-0"
          params={{
            particles: {
              number: {
                value: 24,
                density: {
                  enable: true,
                  value_area: 1200
                }
              },
              color: {
                value: '#8479f1'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 10
                },
                image: {
                  // src: img / github.svg,
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.3630136445780753,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0,
                width: 0
              },
              move: {
                enable: true,
                speed: 0.4,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 5603.036688052902
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 8
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
        />
      </div>
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
