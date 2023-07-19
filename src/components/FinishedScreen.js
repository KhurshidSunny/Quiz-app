import RestartButton from "./RestartButton";

function FinishedScreen({ points, maxPoints, highestScore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
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
          {points} out of {maxPoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="highscore"> (Highscore: {highestScore} points)</p>
      <RestartButton dispatch={dispatch} />
    </div>
  );
}

export default FinishedScreen;
