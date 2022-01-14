import Link from "next/link";
import styles from "./index.module.css";
import Arrow from "../../assets/arrow";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Link href="/" passHref>
          <a>
            <Arrow />
            Ver todos os posts
          </a>
        </Link>
      </div>
    </div>
  );
}
