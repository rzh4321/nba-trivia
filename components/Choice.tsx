import "../src/Choice.css";

type ChoiceType = {
  ind: number;
  choice: string;
  handleChange: (choice: string | boolean, ind: number) => void;
  color: string;
  opacity: string;
};

export default function Choice({
  ind,
  choice,
  handleChange,
  color,
  opacity,
}: ChoiceType) {
  let colorClass: string;
  switch (color) {
    case "red":
      colorClass = "make-red";
      break;
    case "green":
      colorClass = "make-green";
      break;
    case "blue":
      colorClass = "make-selected";
      break;
    default:
      colorClass = "";
  }
  return (
    <button
      className={`choice-button ${colorClass} ${opacity}`}
      onClick={() => handleChange(choice, ind)} // handleChange re-renders only this question
    >
      <span className="button-text">{choice}</span>
    </button>
  );
}
