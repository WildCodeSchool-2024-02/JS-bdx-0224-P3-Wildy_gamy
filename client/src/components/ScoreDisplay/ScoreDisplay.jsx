import "./ScoreDisplay.scss";

import PropTypes from "prop-types";

function ScoreDisplay({ score }) {
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
          <td className="tdRight">{score} points</td>
        </tr>
      </tbody>
    </table>
  );
}

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
};
export default ScoreDisplay;
