import Link from "next/link";
import styles from "./index.module.css";

export default function FootNotes({
  originalTitle,
  originalUrl,
  author,
  authorUrl,
  translator,
  translatorUrl,
}) {
  return (
    <div className={styles.disclaimer}>
      A fim de democratizar o acesso a conteúdo técnico de desenvolvimento em
      português, este artigo é uma tradução de{" "}
      <Link href={originalUrl} passHref>
        <a
          href="https://www.linkedin.com/in/vinicius-casarin-664315182/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {originalTitle}
        </a>
      </Link>{" "}
      por{" "}
      <Link href={authorUrl} passHref>
        <a
          href="https://www.linkedin.com/in/vinicius-casarin-664315182/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {author}
        </a>
      </Link>
      , traduzido por{" "}
      <Link href={translatorUrl} passHref>
        <a
          href="https://www.linkedin.com/in/vinicius-casarin-664315182/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translator}
        </a>
      </Link>
    </div>
  );
}
