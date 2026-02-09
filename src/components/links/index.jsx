import styles from "./styles.module.css";

function Links({ links }) {
  return (
    <div className={styles.container}>
      {links.map((link) => {
        return (
          <a key={link} className={styles.link}>
            {link}
          </a>
        );
      })}
    </div>
  );
}
export default Links;
