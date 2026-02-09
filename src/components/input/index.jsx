import styles from "./styles.module.css";
import searchIcon from "/src/assets/icons/search2.svg";
import locationIcon from "/src/assets/icons/location.svg";

function Input() {
  const inputs = [
    { id: 1, src: searchIcon, placeholder: "Должность или компания" },
    { id: 2, src: locationIcon, placeholder: "Город, Страна" },
  ];
  return (
    <div className={styles.mainContainer}>
      <span className={styles.span}></span>
      {inputs.map((input) => {
        return (
          <div className={styles.container} key={input.id}>
            <img className={styles.icon} src={input.src} alt="search icon" />
            <input
              className={styles.input}
              placeholder={input.placeholder}
            ></input>
          </div>
        );
      })}
    </div>
  );
}
export default Input;
