import styles from "./styles.module.css";
import blue from "/src/assets/icons/blue.svg";
import purple from "/src/assets/icons/purple.svg";
import lightGreen from "/src/assets/icons/lightGreen.svg";
import orange from "/src/assets/icons/orange.svg";
import red from "/src/assets/icons/red.svg";
import black from "/src/assets/icons/black.svg";
import location1 from "/src/assets/icons/locationGray.svg";
import sony1 from "/src/assets/icons/Sony1.svg";
import facebook3 from "/src/assets/icons/facebook3.svg";
import cola from "/src/assets/icons/Cola.svg";

function VacancyCard() {
  const vacancyCard = [
    {
      id: 1,
      src: blue,
      category: "Финансы",
      title: "Менеджер по управлению финансами в крупной компании",
      city: "Осака, Япония",
      company: sony1,
      from: "Sony, 3 дня назад",
    },
    {
      id: 2,
      src: purple,
      category: "Продажи",
      title: "Специалист по продажам",
      city: "Коясан, Япония",
      company: facebook3,
      from: "Facebook, 7 дней назад",
    },
    {
      id: 3,
      src: lightGreen,
      category: "Служба поддержки",
      title: "Оператор колл центра",
      city: "Томаму, Япония",
      company: cola,
      from: "CocaCola, 1 день назад",
    },
    {
      id: 4,
      src: orange,
      category: "Мультимедиа",
      title: "Системный администратор",
      city: "Токио, Япония",
      company: sony1,
      from: "Sony, 3 дня назад",
    },
    {
      id: 5,
      src: red,
      category: "Дизайн",
      title: "Дизайнер интерьера в профессиональную студию в центре города",
      city: "Йокогама, Япония",
      company: facebook3,
      from: "Facebook, 7 дней назад",
    },
    {
      id: 6,
      src: black,
      category: "Грузоперевозки",
      title: "Водитель на дальние дистанции",
      city: "Кобе. Япония",
      company: cola,
      from: "CocaCola, 1 день назад",
    },
  ];
  return (
    <ul className={styles.list}>
      {vacancyCard.map((card) => {
        return (
          <li className={styles.item} key={card.id}>
            <div className={styles.flex}>
              <img src={card.src} />
              <p>{card.category}</p>
            </div>
            <h3 className={styles.title}>{card.title}</h3>
            <div className={styles.flex}>
              <img src={location1} />
              <p className={styles.category}>{card.city}</p>
            </div>
            <div className={styles.date}>
              <img src={card.company} />
              <p className={styles.category}>{card.from}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default VacancyCard;
