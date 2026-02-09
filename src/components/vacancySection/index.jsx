import styles from "./styles.module.css";
import Title from "../title";
import VacancyCard from "../vacancyCards";

function Vacancy() {
  return (
    <section className={styles.container}>
      <Title title={"Новые вакансии"} />
      <p className={styles.text}>Найди работу своей мечты прямо сейчас</p>
      <VacancyCard />
    </section>
  );
}
export default Vacancy;
