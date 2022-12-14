import { TProgressBar } from "./types";
import styles from "./ProgressBar.module.scss";
import classNames from "classnames";

const ProgressBar = ({ numberOfTries, currentTry }: TProgressBar) => {
  return (
    <div className={styles.progress}>
      {Array(numberOfTries)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={styles.bar}>
            {
              <div
                className={classNames(styles.inner, {
                  [styles.visible]: index < currentTry,
                })}
              />
            }
          </div>
        ))}
    </div>
  );
};

export default ProgressBar;
