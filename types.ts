export type MCQuestionType = {
  question: string;
  choices: string[];
  correct: string;
};

export type TFQuestionType = {
  question: string;
  choices: ["True", "False"];
  correct: string;
};

export type settingsType = {
  numQuestions: 5 | 10 | 20;
  difficulty: "easy" | "medium" | "hard" | "any";
  type: "mc" | "tf" | "any";
};
