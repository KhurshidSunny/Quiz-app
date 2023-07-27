import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numOfQuestions, index, points, maxPossiblePoints, answer } =
    useQuiz();
  return (
    <div>
      <header className="progress">
        <progress
          max={numOfQuestions}
          value={index + Number(answer !== null)}
        />
        <p>
          Question <strong>{index + 1} </strong> / {numOfQuestions}
        </p>

        <p>
          <strong>
            {points} / {maxPossiblePoints}
          </strong>
        </p>
      </header>
    </div>
  );
}

export default Progress;
