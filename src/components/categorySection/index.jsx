import styles from "./styles.module.css";
import Title from "../title";
import CategoryCard from "../categoryCard";

function Category() {
  return (
    <section className={styles.container}>
      <Title
        title={
          <>
            Работа
            <br />
            по категориям
          </>
        }
      />
      <CategoryCard />
    </section>
  );
}
export default Category;
