import { MCQuestionType, TFQuestionType } from "../types";
import React from "react";
import Choice from "./Choice";
import "../src/Question.css";

type QuestionType = {
  ind: number;
  question: MCQuestionType | TFQuestionType;
  handleChange: (choice: string | boolean, ind: number) => void;
  submitted: boolean;
  userAnswer: boolean | string | undefined;
};

/* When a user selects a choice, the handleChange prop will run which changes
the "answered" array state in QuestionPage. This re-renders QuestionPage and
therefore re-renders Question, which re-renders Choice. This will happen even
if the choice lives in another question, so even if a user selects a choice in
an entirely diff question, every choice will re-render. That's why React.memo
is used to memoize Question--if the change has nothing to do with this particular
question, don't re-render it. The handleChange function will also be memoized
using useCallback so that React.memo works
*/

const Question = React.memo(
  ({ ind, question, handleChange, submitted, userAnswer }: QuestionType) => {
    const choices: string[] = [];
    for (const choice of question.choices) {
      choices.push(choice);
    }
    const choiceElements = choices.map((choice) => (
      <Choice
        key={choice}
        ind={ind}
        choice={choice}
        handleChange={handleChange}
        color={
          submitted && question.correct === choice
            ? "green"
            : submitted
            ? choice === userAnswer
              ? "red"
              : ""
            : choice === userAnswer
            ? "blue"
            : ""
        }
        opacity={
          submitted && question.correct === choice
            ? ""
            : submitted
            ? "light"
            : ""
        }
      />
    ));

    return (
      <>
        <div className="question">
          <h3 className="question-text">{question.question}</h3>
          <div className="question-buttons">{choiceElements}</div>
          <hr className="question-border" />
        </div>
      </>
    );
  },
);

export default Question;
