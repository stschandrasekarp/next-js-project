import Link from 'next/link';
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout
      title="Home Page"
      name='This is a home page'
      description="Home Page described for the root of the app"
    >
      <div className={styles.home}>
        <h1>Home Page</h1>
        <Link className={styles['link-text']} href='./static-side-generation'>
          Static Side Generation
        </Link>
        <Link className={styles['link-text']} href='./server-side-rendering'>
          Server Side Rendering
        </Link>
        <Link className={styles['link-text']} href='./incremental-static-regeneration'>
          Incremental Static Regeneration
        </Link>
        <Link className={styles['link-text']} href='./client-side-rendering'>
          Client Side Rendering
        </Link>
      </div>
    </Layout>
  )
}


