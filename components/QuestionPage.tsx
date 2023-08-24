import { MCQuestionType, TFQuestionType } from "../types";
import { useCallback, useEffect, useState } from "react";
import Question from "./Question";

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
    return 1;
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
    <>
      {questionElements}
      {submitted ? (
        <>
            <span>You scored {getScore()}/{questions.length} answers</span>
            <button onClick={() => setStart(true)}>Change Settings</button>
            <button onClick={handleClick}>Play Again</button>
        </>
      ) : done ? <button onClick={() => setSubmitted(true)}>Check Answers</button>
      : (

        <>
      <span>Select an answer for all questions!</span>
      <button disabled onClick={() => setSubmitted(true)}>Check Answers</button>
      </>
      )}
    </>
  );
}
