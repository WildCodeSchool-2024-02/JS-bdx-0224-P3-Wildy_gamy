import PropTypes from "prop-types";
import "./FlipCard.scss";

function FlipCard({ reward }) {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { name, image, description, price } = reward;

  return (
      <figure className="flip-card">
          <img
            src={`${BASE_URL}/reward/${image}`}
            alt={`Illustration de la récompense ${name}`}
          />
          <figcaption>
            {`${description} À échanger en salle contre ${price} ${price > 1 ? "jetons" : "jeton"}.`}
          </figcaption>
      </figure>
  );
}

FlipCard.propTypes = {
  reward: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default FlipCard;
