import styles from "./Header.module.css";

import vite from "../assets/vite.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <p>Feed</p>
      <img src={vite} alt="logo" />
    </header>
  );
}
