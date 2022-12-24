import React from "react";
import { TModal } from "./types";
import styles from "./Modal.module.scss";

const Modal = ({ heading, body }: TModal) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.body}>{body}</p>
      </div>
    </div>
  );
};

export default Modal;
