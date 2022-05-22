import { FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.calculator}>CALCULATOR</h1>
    </header>
  );
};
