import Head from "../../src/components/Head";
import { MDXRemote } from "next-mdx-remote";

import { getAllPostsPath, getPostData } from "../api/getPostData";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Disclaimer from "../../src/components/Disclaimer";
import TagList from "../../src/components/TagList";
import styles from "../../styles/Blog.module.css";
import SETTINGS from "../../core/settings";

const components = {
  a: (props) => <a target="_blank" rel="noopener noreferrer" {...props} />,
};

export default function Blog({ postMetadata, postContent }) {
  const {
    title,
    description,
    author,
    authorUrl,
    originalTitle,
    originalUrl,
    translator,
    translatorUrl,
    keywords,
  } = postMetadata;

  return (
    <div>
      <Head
        title={`${title} - ${SETTINGS.BLOG_NAME}`}
        description={description}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "${title}",
              "articleSection": "${keywords.join(", ")}",
              "abstract": "${description}",
              "author": [{
                  "@type": "Person",
                  "name": "${translator}",
                  "url": "${translatorUrl}"
                },{
                  "@type": "Person",
                  "name": "${author}",
                  "url": "${authorUrl}"
              }]
            }`,
          }}
        />
      </Head>
      <Header />
      <div className={styles.article}>
        <div className={styles.articleContent}>
          <Disclaimer
            author={author}
            authorUrl={authorUrl}
            originalTitle={originalTitle}
            originalUrl={originalUrl}
            translator={translator}
            translatorUrl={translatorUrl}
          />
          <article className={styles.articleText}>
            <MDXRemote {...postContent} components={components} />
          </article>
          {keywords && (
            <div className={styles.tagsContainer}>
              <span>Assuntos:</span>
              <TagList list={keywords} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postMetadata: postData.metadata,
      postContent: postData.mdxSource,
      id: params.id,
    },
  };
}
