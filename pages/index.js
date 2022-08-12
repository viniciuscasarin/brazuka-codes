import styles from "../styles/Home.module.css";
import { getPostsMetaData } from "./api/getPostData";
import Card from "../src/components/Card";
import Footer from "../src/components/Footer";
import Head from '../src/components/Head';
import SETTINGS from "../core/settings";

export default function Home({ postsData }) {
  return (
    <>
      <Head/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao <span>{SETTINGS.BLOG_NAME}!</span>
        </h1>

        <p className={styles.description}>{SETTINGS.BLOG_DESCRIPTION}</p>

        <div className={styles.grid}>
          {postsData.map((metadata, index) => {
            return (
              <Card
                key={index}
                id={metadata.id}
                title={metadata.title}
                description={metadata.description}
                tags={metadata.keywords}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const postsData = await getPostsMetaData();
  return {
    props: {
      postsData: postsData,
    },
  };
}
