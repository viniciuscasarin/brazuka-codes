import Link from "next/link";
import styles from "./index.module.css";

export default function TagList({ list }) {
  const showList = list?.length > 0;

  if (!showList) return null;

  return (
    <div>
      {list?.map((item, index) => (
        <Link key={index} href={`/tag/${encodeURIComponent(item)}`} passHref>
          <a className={styles.card}>
            <span className={styles.tag}>{item}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}
