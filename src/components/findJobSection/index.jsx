import styles from "./styles.module.css";
import disney from "/src/assets/icons/disney.svg";
import facebook from "/src/assets/icons/facebookIcon.svg";
import microsoft from "/src/assets/icons/microsoft.svg";
import sony from "/src/assets/icons/sony.svg";
import cocacola from "/src/assets/icons/cocacola.svg";

function FindJobSection() {
  const companyIcons = [
    { id: 1, src: disney, name: "disney" },
    { id: 2, src: facebook, name: "facebook" },
    { id: 3, src: microsoft, name: "microsoft" },
    { id: 4, src: sony, name: "sony" },
    { id: 5, src: cocacola, name: "cocacola" },
  ];
  return (
    <section className={styles.container}>
      <p className={styles.text}>Помогаем найти работу:</p>
      <ul className={styles.list}>
        {companyIcons.map((icon) => {
          return (
            <li className={styles.item} key={icon.id}>
              <img className={styles.img} src={icon.src} alt={icon.name} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default FindJobSection;
