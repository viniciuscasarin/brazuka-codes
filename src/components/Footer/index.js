import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Idealizado por&nbsp;
      <a
        href="https://www.linkedin.com/in/vinicius-casarin-664315182/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vinícius Casarin
      </a>
    </footer>
  );
}
