import { MCQuestionType, TFQuestionType } from "../types";
import { useEffect } from "react";
import React from "react";
import Choice from './Choice';
import "../src/Question.css";

type QuestionType = {
  ind: number;
  question: MCQuestionType | TFQuestionType;
  handleChange: (choice: string | boolean, ind: number) => void;
  submitted: boolean;
  userAnswer: boolean | string | undefined;
};

const Question = React.memo(({
  ind,
  question,
  handleChange,
  submitted,
  userAnswer,
}: QuestionType) => {

    useEffect(() => {
        console.log('hi')
      })
    

  let choices: string[] = [];
  if (question.choices) {
    choices = [];
    for (const choice of question.choices) {
      choices.push(choice);
    }
  } else {
    choices.push("True", "False");
  }
  const choiceElements = choices.map((choice) => (
    <Choice
      key={choice}
      ind={ind}
      choice={choice}
      handleChange={handleChange}
      color={(submitted && question.correct === choice)? 'green' : submitted ? (choice === userAnswer) ? 'red' : '' : (choice === userAnswer) ? 'blue' : ''}
      opacity={(submitted && question.correct === choice) ? '' : submitted? 'light' : ''}
    />
  ));


  return (
    <>
      <div className="question">
        <h3 className="question-text">{question.question}</h3>
        <div className="question-buttons">
            {choiceElements}
        </div>
        <hr className="question-border" />
      </div>
    </>
  );
})

export default Question;