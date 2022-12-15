import styles from "./Button.module.scss";
import { TButton } from "./types";

const Button = ({ onClick, children, disabled }: TButton) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
