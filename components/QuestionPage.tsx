import { MCQuestionType, TFQuestionType } from "../types";
import { useCallback, useEffect, useState } from "react";
import Question from "./Question";
import "../src/QuestionPage.css"

type QuestionPageType = {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  questions: (MCQuestionType | TFQuestionType)[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function QuestionPage({
  setStart,
  questions,
  handleClick,
}: QuestionPageType) {

  const [answered, setAnswered] = useState<(string | boolean)[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function getScore() : number {
    let correct = 0;
    for (let i = 0; i < answered.length; ++i) {
        if (answered[i] === questions[i].correct) {
            correct++;
        }
    }
    return correct;
  }

  useEffect(() => {
    setAnswered([]);
    setSubmitted(false);
  }, [questions])

  function fun(choice: string | boolean, ind: number) {
    setAnswered((prev) => {
      const newAnswered = [...prev];
      newAnswered[ind] = (newAnswered[ind] === choice) ? '' : choice;
      return newAnswered;
    });
  }

  const handleChange = useCallback(fun, []);

  function checkDone() {
    console.log(answered)
    if (answered.length !== questions.length) return false;
    for (const answer of answered) {
      if (answer === "" || answer === undefined) {
        return false;
      }
    }
    return true;
  }
  const done = checkDone();
  const questionElements = questions.map((question, ind) => (
    <Question
      key={ind}
      ind={ind}
      question={question}
      handleChange={handleChange}
      submitted={submitted}
      userAnswer={answered[ind]}
    />
  ));

  return (
        <div className="questions-page">
            <section className="question-list">
                {questionElements}
            </section>
            <div className="questions-footer">
            {submitted ? (
                <>
                    <span className="score">You scored {getScore()}/{questions.length} answers</span>
                    <button onClick={() => setStart(true)} className="questions-submit">Change Settings</button>
                    <button onClick={handleClick} className="questions-submit">Play Again</button>
                </>
            ) : done ? <button onClick={() => setSubmitted(true)} className="questions-submit">Check Answers</button>
            : (

                <>
            <p>Select an answer for all questions!</p>
            <button disabled onClick={() => setSubmitted(true)} className="questions-submit disabled-button">Check Answers</button>
            </>
            )}
        </div>
        </div>
  );
}
