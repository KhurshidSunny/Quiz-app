import { useQuiz } from "../contexts/QuizContext";

function RestartButton() {
  const { resetQuiz } = useQuiz();
  return (
    <button className="btn btn-ui" onClick={() => resetQuiz()}>
      Restart
    </button>
  );
}

export default RestartButton;
