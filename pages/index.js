import Head from 'next/head'
import styles from '../styles/Home.module.css'
const links = require('../links.json');

function Home({docs}) {
  return (
    <ul className={styles.container}>
      {docs.map(entry => <li><a href={`/dz-browser${entry}`}>{entry}</a></li>)}
    </ul>
  );
}

export async function getStaticProps() {
  return {
      props: {
          docs: Object.keys(links)
      },
  }
}

export default Home;
