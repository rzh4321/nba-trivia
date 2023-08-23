import {MCQuestionType, TFQuestionType, settingsType} from '../types';
import { useState } from "react"

function App() {
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState<(MCQuestionType | TFQuestionType)[]>([]);
  const [settings, setSettings] = useState<settingsType>({numQuestions: 5, difficulty: 'any', type: 'any' })
  return (
    <>
    </>
  )
}

export default App
