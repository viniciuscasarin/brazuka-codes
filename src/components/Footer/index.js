import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/viniciuscasarin/blog-devptbr/blob/master/CONTRIBUA.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contribua!
      </a>
    </footer>
  );
}
