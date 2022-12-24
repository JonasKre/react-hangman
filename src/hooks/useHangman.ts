import { useEffect, useState } from "react";
import { NUMBER_OF_TRIES } from "../consts";
import useWordsFromUrl from "./useWordsFromUrl";

export default function useHangman() {
  const words = useWordsFromUrl();
  const [currentRound, setCurrentRound] = useState(1);
  const [searchedWord, setSearchedWord] = useState(words[0]);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);
  const [isRoundOver, setisRoundOver] = useState(false);
  const numberOfRounds = words.length;
  const isGameLost = incorrectGuesses.length === NUMBER_OF_TRIES;
  const isGameWon = currentRound === numberOfRounds && isRoundOver;

  const handleLetterClick = (letter: string) => {
    if (
      [...correctGuesses, ...incorrectGuesses].includes(letter) ||
      isRoundOver
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
    }
  }, [correctGuesses.length, incorrectGuesses.length]);

  return {
    handleAddLetter: handleLetterClick,
    searchedWord,
    correctGuesses,
    incorrectGuesses,
    getLetterStatus,
    currentRound,
    numberOfRounds,
    isGameLost,
    isGameWon,
    isRoundOver,
    goToNextRound,
  };
}
