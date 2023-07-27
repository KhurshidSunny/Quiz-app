import { useQuiz } from "../contexts/QuizContext";
import RestartButton from "./RestartButton";

function FinishedScreen() {
  const { points, maxPossiblePoints, highestScore } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;

  if (percentage === 100) emoji = "💰";
  if (percentage >= 80 && percentage < 100) emoji = "🎁";
  if (percentage >= 50 && percentage < 80) emoji = "🎇";
  if (percentage >= 0 && percentage < 50) emoji = "👼";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div>
      <p className="result">
        <span>{emoji}</span>
        Your Scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="highscore"> (Highscore: {highestScore} points)</p>
      <RestartButton />
    </div>
  );
}

export default FinishedScreen;
