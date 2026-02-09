import styles from "./styles.module.css";

function LogIn({ title, variant }) {
  return <a className={`${styles.link} ${styles[variant]}`}>{title}</a>;
}
export default LogIn;
