import styles from "./Keyboard.module.scss";
import { TKeyboard } from "./types";

const Keyboard = ({ children }: TKeyboard) => {
  return <div className={styles.keyboard}>{children}</div>;
};

export default Keyboard;
