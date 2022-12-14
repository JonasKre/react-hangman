import React from "react";
import { TContainer } from "./types";
import styles from "./Container.module.scss";

const Container = ({ children }: TContainer) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
