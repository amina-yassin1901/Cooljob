import styles from "./styles.module.css";
import Links from "../links";
import Logo from "../logo";
import LogIn from "../logIn";

function Header() {
  const linksJob = ["Поиск работы", "Поиск стартапов"];

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.linksContainer}>
        <Links links={linksJob} />
        <div className={styles.container}>
          <LogIn title={"Регистрация"} variant={"primary"} />
          <LogIn title={"Вход"} variant={"secondary"} />
        </div>
      </div>
    </header>
  );
}
export default Header;
