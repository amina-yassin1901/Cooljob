import styles from "./styles.module.css";

function Title({ title, variant }) {
  return <h2 className={`${styles.title} ${styles[variant]}`}>{title}</h2>;
}
export default Title;
