import { MCQuestionType, TFQuestionType, settingsType } from "../types";
import {
  getEasyQuestions,
  getMediumQuestions,
  getHardQuestions,
} from "../utils";
import StartScreen from "../components/StartScreen";
import QuestionPage from "../components/QuestionPage";
import "./App.css";

import { useEffect, useState } from "react";

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
    }
    setStart(false);
  }

  return (
    <>
      {
        start? 
        (<StartScreen
        settings={settings}
        setSettings={setSettings}
        handleClick={handleClick}
      ></StartScreen>) :
      <QuestionPage setStart={setStart} questions={questions} handleClick={handleClick} />
      }
    </>
  );
}

export default App;
