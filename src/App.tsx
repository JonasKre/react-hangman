import "@fontsource/open-sans";
import Container from "./components/Container/Container";
import Key from "./components/Key/Key";
import Keyboard from "./components/Keyboard/Keyboard";
import Letter from "./components/Letter/Letter";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Section from "./components/Section/Section";
import ALPHABET from "./constants/alphabet";
import useHangman from "./hooks/useHangman";

function App() {
  const {
    handleAddLetter,
    searchedWord,
    correctGuesses,
    incorrectGuesses,
    getLetterStatus,
    isGameOver,
  } = useHangman("happyhob");

  return (
    <>
      <Section>
        <Container>
          <ProgressBar numberOfTries={5} currentTry={incorrectGuesses.length} />
        </Container>
      </Section>
      <Section>
        <Container>
          {searchedWord.map((letter, index) => (
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
