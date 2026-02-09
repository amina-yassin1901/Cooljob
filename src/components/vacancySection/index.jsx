import styles from "./styles.module.css";
import Title from "../title";
import VacancyCard from "../vacancyCards";
import Button from "../button";

function Vacancy() {
  return (
    <section className={styles.container}>
      <Title title={"Новые вакансии"} />
      <p className={styles.text}>Найди работу своей мечты прямо сейчас</p>
      <VacancyCard />
      <div className={styles.btnFlex}>
        <Button title={"Все вакансии"} variant={"secondButton"} />
      </div>
    </section>
  );
}
export default Vacancy;
