import { useEffect, useState } from "react";

export default function useHangman(words: string[], maxTriesAmount: number) {
  const totalRounds = words.length;
  const [currentRound, setCurrentRound] = useState(1);
  const [searchedWord, setSearchedWord] = useState(words[currentRound - 1]);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRoundOver, setisRoundOver] = useState(false);

  const handleLetterClick = (letter: string) => {
    if (
      [...correctGuesses, ...incorrectGuesses].includes(letter) ||
      isRoundOver ||
      isGameOver
    ) {
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

  const goToNextRound = () => {
    setCurrentRound((previousRound) => previousRound + 1);
    setCorrectGuesses([]);
    setIncorrectGuesses([]);
    setisRoundOver(false);
  };

  useEffect(() => {
    setSearchedWord(words[currentRound - 1]);
  }, [currentRound]);

  useEffect(() => {
    if ([...searchedWord].every((x) => correctGuesses.includes(x))) {
      setisRoundOver(true);

      if (currentRound === totalRounds) {
        setIsGameOver(true);
      }
    }

    if (incorrectGuesses.length === maxTriesAmount) {
      setIsGameOver(true);
    }
  }, [correctGuesses.length, incorrectGuesses.length]);

  return {
    handleAddLetter: handleLetterClick,
    searchedWord,
    correctGuesses,
    incorrectGuesses,
    getLetterStatus,
    currentRound,
    totalRounds,
    isGameOver,
    isRoundOver,
    goToNextRound,
  };
}
