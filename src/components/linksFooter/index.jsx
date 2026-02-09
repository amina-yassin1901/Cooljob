import styles from "./styles.module.css";
import logoGray from "/src/assets/icons/logoGray.svg";
import inIcon from "/src/assets/icons/in.svg";
import tw from "/src/assets/icons/tw.svg";
import facebook0 from "/src/assets/icons/feFacebook0.svg";
import google from "/src/assets/icons/google.svg";

function LinksFooter() {
  const linksicons = [
    { id: 1, src: inIcon },
    { id: 2, src: google },
    { id: 3, src: tw },
    { id: 4, src: facebook0 },
  ];
  return (
    <div className={styles.line}>
      <div className={styles.container}>
        <img className={styles.logo} src={logoGray} alt="logo gray icon" />
        <ul className={styles.list}>
          {linksicons.map((link) => {
            return (
              <li className={styles.item} key={link.id}>
                <img src={link.src} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default LinksFooter;
