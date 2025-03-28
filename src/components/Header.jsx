import styles from "./Header.module.css";
import earthImg from "/EartLogo.svg";
export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <img src={earthImg} alt="EarthLogo" />
        <h2>my travel journal.</h2>
      </header>
    </>
  );
}
