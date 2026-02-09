import styles from "./styles.module.css";

function Button({ title, variant }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} type="button">
      {title}
    </button>
  );
}
export default Button;
