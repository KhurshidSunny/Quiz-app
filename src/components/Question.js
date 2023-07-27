import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        <Options />
      </div>
    </div>
  );
}

export default Question;
