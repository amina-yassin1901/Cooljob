import styles from "./styles.module.css";
import union from "/src/assets/icons/Union.svg";
import evaCar from "/src/assets/icons/evaCarOutline2.svg";
import icon3 from "/src/assets/icons/icon3.svg";
import icon4 from "/src/assets/icons/icon4.svg";
import icon5 from "/src/assets/icons/icon5.svg";
import icon6 from "/src/assets/icons/icon6.svg";
import icon7 from "/src/assets/icons/icon7.svg";
import icon8 from "/src/assets/icons/icon8.svg";
import icon9 from "/src/assets/icons/icon9.svg";
import iconNext from "/src/assets/icons/iconNext.svg";

function CategoryCard() {
  const categoryCards = [
    { id: 1, src: union, title: "Финансы" },
    { id: 2, src: evaCar, title: "Грузоперевозки" },
    { id: 3, src: icon3, title: "Дизайн" },
    { id: 4, src: icon4, title: "Ресторанный бизнес" },
    { id: 5, src: icon5, title: "Медицина" },
    { id: 6, src: icon6, title: "Мультимедиа" },
    { id: 7, src: icon7, title: "Служба поддержки" },
    { id: 8, src: icon8, title: "Менеджмент" },
    { id: 9, src: icon9, title: "Продажи" },
  ];
  return (
    <ul className={styles.list}>
      {categoryCards.map((card) => {
        return (
          <li className={styles.item} key={card.id}>
            <img className={styles.icon} src={card.src} alt={card.title} />
            {card.title}
          </li>
        );
      })}
      <li className={styles.lastItem}>
        <img className={styles.icon} src={iconNext} alt="icon next" />
        Больше категорий
      </li>
    </ul>
  );
}
export default CategoryCard;
