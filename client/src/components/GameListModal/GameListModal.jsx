import PropTypes from "prop-types";
import "../../scss/index.scss";
import "./GameListModal.scss";
import { Form } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL;

function GameListModal({ open, onClose, game }) {
  if (!open || !game) return null;

  return (
    <section className="modal-open">
      <article className="modal-content">
        <button type="button" className="close-button" onClick={onClose}>
          ×
        </button>
        <Form method="POST">
          <label htmlFor="favoriteCheckbox" aria-label="favoris">
            <svg className="heart" viewBox="0 0 24 24">
              <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z" />
            </svg>
          </label>
          <input
            type="checkbox"
            id="favoriteCheckbox"
            name="favoriteCheckbox"
          />
        </Form>
        <img
          src={`${BASE_URL}/${game.image_demo}`}
          alt={`Demo de ${game.title}`}
          className="demo-image"
        />
        <h2>{game.title}</h2>
        <p>Date de sortie : {game.date_de_sortie}</p>
        <p>{game.description}</p>
        {game.demoLink && (
          <a href={game.demoLink} target="_blank" rel="noreferrer">
            Voir la démo
          </a>
        )}
      </article>
    </section>
  );
}

GameListModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  game: PropTypes.shape({
    image_demo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date_de_sortie: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
  }).isRequired,
};

export default GameListModal;