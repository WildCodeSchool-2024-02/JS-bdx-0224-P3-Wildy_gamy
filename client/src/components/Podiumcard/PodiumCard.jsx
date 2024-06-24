import PropTypes from 'prop-types';


import "./PodiumCard.scss";

function PodiumCard({card}) {
  return (
    <figure className="podiumCard">
      <img src={card.ornLeft} alt="decoration gauche" />
      <img src={card.orn} alt="decoration" />
      <img src={card.ornRight} alt="decoration droite" />
      <figcaption className="podiumCardText">John Doe</figcaption>
      <img src={card.flowerLeft} alt="fleur gauche" />
      <img src={card.trophy} alt="trophée" />
      <img src={card.flowerRight} alt="fleur droite" />
      <figcaption className="podiumCardText">2000 points</figcaption>
    </figure>
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
};

export default PodiumCard;

