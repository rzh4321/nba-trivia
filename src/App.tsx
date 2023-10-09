import { MCQuestionType, TFQuestionType, settingsType } from "../types";
import {
  getEasyQuestions,
  getMediumQuestions,
  getHardQuestions,
  getAnyDiff,
} from "../utils";
import StartScreen from "../components/StartScreen";
import QuestionPage from "../components/QuestionPage";
import "./App.css";

import { useState } from "react";

function App() {
  const [start, setStart] = useState(true);
  const [questions, setQuestions] = useState<
    (MCQuestionType | TFQuestionType)[]
  >([]);
  const [settings, setSettings] = useState<settingsType>({
    numQuestions: 5,
    difficulty: "any",
    type: "any",
  });


  // called when "Start Quiz" or "Play Again" is clicked
  // gets random questions according to selected settings
  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    e.preventDefault();
    const { numQuestions, difficulty, type } = settings;
    if (difficulty === "easy") {
      setQuestions(getEasyQuestions(numQuestions, type));
    } else if (difficulty === "medium") {
      setQuestions(getMediumQuestions(numQuestions, type));
    } else if (difficulty === "hard") {
      setQuestions(getHardQuestions(numQuestions, type));
    } else {
      setQuestions(getAnyDiff(numQuestions, type));
    }
    // display quiz page after setting questions
    setStart(false);
  }

  return (
    <>
      {start ? (
        <StartScreen
          settings={settings}
          setSettings={setSettings}
          handleClick={handleClick}
        ></StartScreen>
      ) : (
        <QuestionPage
          setStart={setStart}
          questions={questions}
          handleClick={handleClick}
        />
      )}
    </>
  );
}

export default App;
