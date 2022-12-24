import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import Key from "../components/Key/Key";
import Keyboard from "../components/Keyboard/Keyboard";
import Letter from "../components/Letter/Letter";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Section from "../components/Section/Section";
import useHangman from "../hooks/useHangman";
import useWordsFromUrl from "../hooks/useWordsFromUrl";
import { NUMBER_OF_TRIES, LETTERS } from "../consts";
import Modal from "../components/Modal/Modal";

const Game = () => {
  const {
    handleAddLetter,
    searchedWord,
    correctGuesses,
    incorrectGuesses,
    getLetterStatus,
    isGameWon,
    isGameLost,
    isRoundOver,
    numberOfRounds,
    currentRound,
    goToNextRound,
  } = useHangman();
  const showButton = currentRound !== numberOfRounds;
  const showModal = isGameLost || isGameWon;

  return (
    <>
      {showModal && (
        <Modal
          heading={isGameLost ? "Game Over :(" : "You won!"}
          body={
            isGameLost
              ? "Better luck next time!"
              : "Amazing guessing skills, kudos to you!"
          }
        />
      )}
      <Section>
        <Container>
          Round {currentRound} of {numberOfRounds}
          <ProgressBar
            numberOfTries={NUMBER_OF_TRIES}
            currentTry={incorrectGuesses.length}
          />
          {showButton && (
            <Button onClick={goToNextRound} disabled={!isRoundOver}>
              Next Round
            </Button>
          )}
        </Container>
      </Section>
      <Section>
        <Container>
          {[...searchedWord].map((letter, index) => (
            <Letter key={index}>
              {correctGuesses.includes(letter) ? letter : ""}
            </Letter>
          ))}
        </Container>
      </Section>
      <Section highlighted>
        <Container>
          <Keyboard>
            {LETTERS.map((letter) => (
              <Key
                key={letter}
                handleClick={handleAddLetter}
                status={getLetterStatus(letter)}
              >
                {letter}
              </Key>
            ))}
          </Keyboard>
        </Container>
      </Section>
    </>
  );
};

export default Game;
