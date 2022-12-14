import React from "react";
import { TSection } from "./types";
import classnames from "classnames";
import styles from "./Section.module.scss";

const Section = ({ children, highlighted }: TSection) => {
  return (
    <div
      className={classnames(styles.section, {
        [styles.highlighted]: highlighted,
      })}
    >
      {children}
    </div>
  );
};

export default Section;
