import { settingsType } from "../types";
import "../src/StartScreen.css";

type StartScreenProps = {
  settings: settingsType;
  setSettings: React.Dispatch<React.SetStateAction<settingsType>>;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function StartScreen({
  settings,
  setSettings,
  handleClick,
}: StartScreenProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    let numQuestions: number;
    if (e.target.name === "numQuestions") {
      numQuestions = +e.target.value;
    }
    setSettings((prevSettings) => {
      return {
        ...prevSettings,
        [e.target.name]: numQuestions || e.target.value,
      };
    });
  }
  return (
    <div className="start-container">
      <h1 className="start-title">HoopsIQ</h1>
      <p className="start-text">Test your NBA knowledge!</p>
      <form className="start-form">
        <div className="form-element">
          <label htmlFor="num-questions" className="form-label">
            Number of Questions:
          </label>
          <select
            id="num-questions"
            value={settings.numQuestions}
            onChange={handleChange}
            name="numQuestions"
            className="settings-select"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="difficulty" className="form-label">
            Difficulty:
          </label>
          <select
            id="difficulty"
            value={settings.difficulty}
            onChange={handleChange}
            name="difficulty"
            className="settings-select"
          >
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="type" className="form-label">
            Type of Questions:
          </label>
          <select
            id="type"
            value={settings.type}
            onChange={handleChange}
            name="type"
            className="settings-select"
          >
            <option value="any">Any Type</option>
            <option value="mc">Multiple Choice</option>
            <option value="tf">True / False</option>
          </select>
        </div>
      </form>
      <button onClick={handleClick} type="button" className="form-button">
        Start Quiz
      </button>
    </div>
  );
}