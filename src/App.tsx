import "@fontsource/open-sans";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Key from "./components/Key/Key";
import Keyboard from "./components/Keyboard/Keyboard";
import Letter from "./components/Letter/Letter";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Section from "./components/Section/Section";
import ALPHABET from "./constants/alphabet";
import useHangman from "./hooks/useHangman";

function App() {
  const tries = 5;
  const {
    handleAddLetter,
    searchedWord,
    correctGuesses,
    incorrectGuesses,
    getLetterStatus,
    isGameOver,
    isRoundOver,
    totalRounds,
    currentRound,
    goToNextRound,
  } = useHangman(["test", "blupp"], tries);
  const showButton = currentRound !== totalRounds;

  return (
    <>
      <Section>
        <Container>
          Round {currentRound} of {totalRounds}
          <ProgressBar
            numberOfTries={tries}
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
            {ALPHABET.map((letter) => (
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
}

export default App;
