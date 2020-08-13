import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jackson Kaufman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/dev">
            <a className={styles.card}>
              <h3>Dev Work &rarr;</h3>
              <p>Explore Jackson's Web Development Resume and Portfolio</p>
            </a>
          </Link>
          <Link href="/music">
            <a className={styles.card}>
              <h3>Music &rarr;</h3>
              <p>See what Jackson has been up to musically lately</p>
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
