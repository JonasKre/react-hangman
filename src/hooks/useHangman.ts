import { useEffect, useState } from "react";

export default function useHangman(solution: string) {
  const [searchedWord, setSearchedWord] = useState([...solution]);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleAddLetter = (letter: string) => {
    if ([...correctGuesses, ...incorrectGuesses].includes(letter)) {
      return;
    }

    if (searchedWord.includes(letter)) {
      setCorrectGuesses((previousLetters) => [...previousLetters, letter]);
    } else {
      setIncorrectGuesses((previousLetters) => [...previousLetters, letter]);
    }
  };

  const getLetterStatus = (letter: string) => {
    if (![...correctGuesses, ...incorrectGuesses].includes(letter)) {
      return;
    }

    return correctGuesses.includes(letter) && searchedWord.includes(letter)
      ? "correct"
      : "incorrect";
  };

  useEffect(() => {
    if ([...searchedWord].every((x) => correctGuesses.includes(x))) {
      setIsGameOver(true);
    }
  }, [correctGuesses.length]);

  return {
    handleAddLetter,
    searchedWord,
    correctGuesses,
    incorrectGuesses,
    getLetterStatus,
    isGameOver,
  };
}