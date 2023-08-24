import { MCQuestionType, TFQuestionType } from "../types";

type QuestionType = {
  ind: number;
  question: MCQuestionType | TFQuestionType;
  handleChange: (choice: string | boolean, ind: number) => void;
  submitted: boolean;
  userAnswer: boolean | string | undefined;
};

export default function Question({
  ind,
  question,
  handleChange,
  submitted,
  userAnswer,
}: QuestionType) {
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
      choice={choice}
      handleChange={handleChange}
      selected={choice === userAnswer}
      makeGreen={submitted && question.correct === choice}
    />
  ));

  // const choiceElements = choices.map(choice =>
  //     (
  //         <input
  //             type='radio'
  //             name='choice'
  //             value={choice}
  //             disabled={submitted}
  //             checked={}
  //         />
  //     )

  // )

  return (
    <>
      <div className="question">
        <span className="question-text">{question.question}</span>
        {choiceElements}
      </div>
    </>
  );
}
