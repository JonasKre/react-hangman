import React from "react";

export type TKeyboard = {
  children: React.ReactNode;
};

export type TKey = {
  handleClick: (letter: string) => void;
};
