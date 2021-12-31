import { GetServerSideProps, NextPage } from 'next'
import { FaDochub, FaBook } from 'react-icons/fa'
import styles from '~/styles/Home.module.css'
import HashIcon from '../svgs/hash-icon.svg'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/Layout'

type IndexPageServerSideProps = {
  meta: {
    title: string
  }
}

const IndexPage: NextPage<NextAppPageProps> = ({ meta }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className="w-full flex flex-col place-items-center text-6xl gap-2">
            <HashIcon />
            VividGrounds
          </h1>

          <p className={styles.description}>
            Now on making!{' '}
          </p>

          <div className={styles.grid}>
            <a href="https://github.com/tamagoez/vivid-grounds" className={styles.card}>
              <FaDochub className="text-4xl mb-2" />
              <h3>View on GitHub &rarr;</h3>
              <p>This project is public and able to view.</p>
            </a>

            <a href="https://twitter.com/tamago_ez" className={styles.card}>
              <FaBook className="text-4xl mb-2" />
              <h3>Follow my Twitter! &rarr;</h3>
              <p>Let's get new information rapidly!</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<IndexPageServerSideProps> =
  async () => {
    return {
      props: {
        meta: {
          title: 'Now on build! - VividGrounds',
        },
      },
    }
  }
