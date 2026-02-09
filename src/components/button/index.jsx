import styles from "./styles.module.css";

function Button({ title }) {
  return (
    <button className={styles.button} type="button">
      {title}
    </button>
  );
}
export default Button;
