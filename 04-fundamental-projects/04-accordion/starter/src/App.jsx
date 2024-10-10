import data from './data.js';
import { useState } from "react";
import Questions from './Questions.jsx';
// console.log(data)

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(id);
  }

  return <main>
    <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion} />
  </main>;
};
export default App;
