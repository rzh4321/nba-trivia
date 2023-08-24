import '../src/Choice.css';

type ChoiceType = {
    ind: number;
    choice: string;
    handleChange: (choice: string | boolean, ind: number) => void;
    selected: boolean;
    makeGreen: boolean;
}


export default function Choice({ind, choice, handleChange, selected, makeGreen} : ChoiceType) {
    return <button className={`choice-button ${selected? 'selected-choice' : ''} ${makeGreen? 'make-green': ''}`} onClick={() => handleChange(choice, ind)}>{choice}</button>
}