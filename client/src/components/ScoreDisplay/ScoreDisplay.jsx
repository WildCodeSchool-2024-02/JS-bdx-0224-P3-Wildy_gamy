import "./ScoreDisplay.scss";

function ScoreDisplay() {
  return (
    <table className="tableScore">
      <thead>
        <tr>
          <th>Game</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Space Invaders</td>
          <td className="tdRight">2000 points</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ScoreDisplay;
