import styles from "./styles.module.css";

function Cities() {
  const cities = [
    "Осака",
    "Коясан",
    "Токио",
    "Хаконэ",
    "Наэба",
    "Томаму",
    "Йокогама",
    "Нагоя",
    "Саппоро",
    "Кобе",
  ];
  return (
    <ul className={styles.list}>
      {cities.map((city, index) => {
        return (
          <li className={styles.item} key={index}>
            {city}
          </li>
        );
      })}
    </ul>
  );
}
export default Cities;
