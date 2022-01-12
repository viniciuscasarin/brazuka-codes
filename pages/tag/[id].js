import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { getPostsMetaDataByTag, getAllTagsPath } from "../api/getPostData";
import Header from "../../src/components/Header";
import Card from "../../src/components/Card";
import Footer from "../../src/components/Footer";

export default function Tag({ tag, postsData }) {
  return (
    <>
      <Head>
        <title>{tag}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Postagens sobre <span>{tag}!</span>
        </h1>

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

export async function getStaticPaths() {
  const paths = await getAllTagsPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("/tag/");
  const postsData = await getPostsMetaDataByTag(params.id);
  return {
    props: {
      tag: params.id,
      postsData: postsData,
    },
  };
}
