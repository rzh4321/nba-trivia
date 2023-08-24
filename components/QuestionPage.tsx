import {MCQuestionType, TFQuestionType} from '../types';
import { useCallback, useState } from 'react';

type QuestionPageType = {
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
    questions: (MCQuestionType | TFQuestionType)[];
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}


export default function QuestionPage({setStart, questions, handleClick} : QuestionPageType) {
    const [answered, setAnswered ] = useState<string[]>([])

    function fun(e: React.FormEvent<HTMLButtonElement>, ind: number) {
        answered[ind] = e.target.getAttribute('choice');
    }

    const handleChange = useCallback(fun, [])

    function checkDone() {
        for (const answer of answered) {
            if (answer === '') {
                return false;
            }
        }
        return true;
    }
    const done = checkDone();
    const questionElements = questions.map((question, ind) => <Question
        key={ind}
        ind={ind}
        question={question}
        handleChange={handleChange}
        >)
    return (
        <>
            
            {done ? '' : <span>Select an answer for all questions!</span>}
                <button disabled={!done}>Check Answers</button>
        </>
    )
}