import "./ScoreDisplay.scss";

function ScoreDisplay() {
  return (
    <table className="tableScore">
      <thead>
        <tr>
          <th scope="col">Jeux</th>
          <th scope="col">Score</th>
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
