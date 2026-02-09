import styles from "./styles.module.css";
import MainTitle from "../mainTitle";
import Form from "../form";
import Button from "../button";
import rectanglelIcon from "/src/assets/icons/Rectangle.svg";

function Hero() {
  return (
    <section className={styles.container}>
      <img className={styles.bg} src={rectanglelIcon}></img>
      <MainTitle />
      <div className={styles.inputContainer}>
        <Form />
        <Button title={"Поиск"} />
      </div>
    </section>
  );
}
export default Hero;
