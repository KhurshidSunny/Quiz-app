function Progress({ numOfQuestions, index, points, maxPoints, answer }) {
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
            {points} / {maxPoints}
          </strong>
        </p>
      </header>
    </div>
  );
}

export default Progress;
