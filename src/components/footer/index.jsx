import styles from "./styles.module.css";
import Title from "../title";
import Cities from "../cities";
import LinksFooter from "../linksFooter";

function Footer() {
  return (
    <footer className={styles.container}>
      <Title title={"Популярные города"} variant={"secondTitle"} />
      <div>
        <Cities />
        <LinksFooter />
      </div>
    </footer>
  );
}
export default Footer;
