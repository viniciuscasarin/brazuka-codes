import Link from "next/link";
import TagList from "../TagList";
import styles from "./index.module.css";

export default function Card({ id, title, description, tags }) {
  return (
    <Link href={`/blog/${id}`} passHref>
      <a className={styles.card}>
        <h2 className="post-title">{title}</h2>
        <p className="post-description">{description}</p>
        <TagList list={tags} />
      </a>
    </Link>
  );
}
