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
      <div className="particles absolute h-screen w-screen">
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#ffffff'
              },
              shape: {
                // type: circle,
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  // src: img / github.svg,
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
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
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                // direction: none,
                random: false,
                straight: false,
                // out_mode: out,
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              // detect_on: canvas,
              events: {
                onhover: {
                  enable: true,
                  // mode: repulse
                },
                onclick: {
                  enable: true,
                  // mode: push
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
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
                  particles_nb: 4
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
      <main className={styles.main}>
        <h1 className="text-6xl mt-0">Jackson Kaufman</h1>
        <div className={styles.grid}>
          <Link href="/dev">
            <a className={styles.card}>
              <h3>Dev Work &rarr;</h3>
              <p>Explore Jackson's web development resume and portfolio</p>
            </a>
          </Link>
          <Link href="/music">
            <a className={styles.card}>
              <h3>Music &rarr;</h3>
              <p>See what Jackson has been up to musically</p>
            </a>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        Developed by Jackson Kaufman
      </footer>
    </div>
  )
}
