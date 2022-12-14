export type TKey = {
  children: string;
  handleClick: (letter: string) => void;
  status?: TStatus;
};

type TStatus = "initial" | "correct" | "incorrect";
