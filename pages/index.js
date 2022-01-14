import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getPostsMetaData } from "./api/getPostData";
import { BLOG_TITLE, BLOG_DESCRIPTION } from "../src/constants";
import Card from "../src/components/Card";
import Footer from "../src/components/Footer";

export default function Home({ postsData }) {
  return (
    <>
      <Head>
        <title>
          {BLOG_TITLE} - {BLOG_DESCRIPTION}
        </title>
        <meta name="description" content={BLOG_DESCRIPTION} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao{" "}
          <span>
            <a
              href="https://github.com/viniciuscasarin/blog-devptbr/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {BLOG_TITLE}!
            </a>
          </span>
        </h1>

        <p className={styles.description}>{BLOG_DESCRIPTION}</p>

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
