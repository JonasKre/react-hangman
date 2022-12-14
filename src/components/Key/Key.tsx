import { TKey } from "./types";
import styles from "./Key.module.scss";
import classNames from "classnames";

const Key = ({ children, handleClick, status = "initial" }: TKey) => {
  return (
    <button
      className={classNames(styles.key, {
        [styles.correct]: status === "correct",
        [styles.incorrect]: status === "incorrect",
      })}
      onClick={() => handleClick(children)}
    >
      {children}
    </button>
  );
};

export default Key;
