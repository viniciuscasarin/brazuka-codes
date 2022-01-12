import Link from "next/link";
import styles from "./index.module.css";
import arrow from "../../assets/arrow.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Link href="/" passHref>
          <a>
            <img src={arrow} alt="Voltar" width={16} height={16} />
            Ver todos os posts
          </a>
        </Link>
      </div>
    </div>
  );
}
