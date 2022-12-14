import React from "react";
import { TLetter } from "./types";
import styles from "./Letter.module.scss";

const Letter = ({ children }: TLetter) => {
  return <div className={styles.base}>{children}</div>;
};

export default Letter;
