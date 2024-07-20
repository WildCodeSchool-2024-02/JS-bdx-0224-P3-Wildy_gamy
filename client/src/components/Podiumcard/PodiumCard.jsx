import PropTypes from "prop-types";

import "./PodiumCard.scss";

function PodiumCard({ card, party }) {
  return (
    <>
      <figure>
        <img src={card.ornLeft} alt="" />
        <img src={card.orn} alt="" />
        <img src={card.ornRight} alt="" />
        <figcaption className="podiumCardText">{party.pseudo}</figcaption>
      </figure>
      <figure>
        <img src={card.flowerLeft} alt="" />
        <img src={card.trophy} alt="" className="trophy-img" />
        <img src={card.flowerRight} alt="" />
        <figcaption className="podiumCardText">{party.score}</figcaption>
      </figure>
    </>
  );
}

PodiumCard.propTypes = {
  card: PropTypes.shape({
    ornLeft: PropTypes.string.isRequired,
    orn: PropTypes.string.isRequired,
    ornRight: PropTypes.string.isRequired,
    flowerLeft: PropTypes.string.isRequired,
    trophy: PropTypes.string.isRequired,
    flowerRight: PropTypes.string.isRequired,
  }).isRequired,
  party: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default PodiumCard;
