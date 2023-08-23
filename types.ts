export type MCQuestionType = {
    question: string;
    choices: string[];
    correct: string;
    index: number;
};

export type TFQuestionType = {
    question: string;
    correct: string;
    index: number;
};

export type settingsType = {
    numQuestions: 5 | 10 | 20;
    difficulty: 'easy' | 'medium' | 'hard' | 'any';
    type: 'mc' | 'tf' | 'any';
}

