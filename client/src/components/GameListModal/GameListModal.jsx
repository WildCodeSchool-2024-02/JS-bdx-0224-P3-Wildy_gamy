import PropTypes from "prop-types";
import "../../scss/index.scss";
import "./GameListModal.scss";
import { Form, useSubmit } from "react-router-dom";
import { useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

function GameListModal({ onClose, isOpen, gamesData, auth }) {
  const submit = useSubmit();
  const [isFavorite, setIsFavorite] = useState(gamesData?.isFavorite);

  const handleCheckboxChange = (event) => {
    setIsFavorite(event.target.checked);

    const formData = new FormData();
    formData.append("userId", auth?.id || "");
    formData.append("gameId", gamesData?.id || "");
    formData.append("isFavorite", event.target.checked);

    submit(formData, { method: event.target.checked ? "POST" : "DELETE" });
  };

  if (!isOpen || !gamesData) return null;

  // console.log(
  //   "is_favorite =",
  //   isFavorite,
  //   "authId =",
  //   auth?.id,
  //   "gameName =",
  //   gamesData.name
  // );

  return (
    <dialog className="modal-active">
      <article className="modal-content">
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="modal fermée"
          title="fermé"
        >
          ×
        </button>
        {auth && (
          <Form>
            <label
              className="favorite-container"
              htmlFor="favoriteCheckbox"
              aria-label="favoris"
              title="Ajouter aux favoris"
            >
              <input
                type="checkbox"
                id="favoriteCheckbox"
                name="favoriteCheckbox"
                value={isFavorite}
                checked={isFavorite}
                onChange={handleCheckboxChange}
              />
              <svg className="heart" viewBox="0 0 24 24">
                <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z" />
              </svg>
            </label>
          </Form>
        )}
        {gamesData.image_demo && (
          <img
            src={`${BASE_URL}/${gamesData.image_demo}`}
            alt={`Demo de ${gamesData.name}`}
            className="demo-image"
          />
        )}
        <h2 className="title-modal">{gamesData.name}</h2>
        <p className="game-description">
          Date de sortie : {gamesData.release_date}
        </p>
        <p className="game-description">{gamesData.description}</p>
        {gamesData.demoLink && (
          <a
            className="demo-link"
            href={gamesData.demoLink}
            target="_blank"
            rel="noreferrer"
          >
            Voir la démo
          </a>
        )}
      </article>
    </dialog>
  );
}
GameListModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  gamesData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_demo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    release_date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    isFavorite: PropTypes.bool,
  }),
  auth: PropTypes.shape({
    id: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
  }),
};

GameListModal.defaultProps = {
  isOpen: false,
  gamesData: {
    id: null,
    image_demo: "",
    name: "Jeu non disponible",
    release_date: "Non disponible",
    description: "Aucune description disponible.",
    demoLink: null,
    isFavorite: false,
  },
  auth: {
    id: null,
    role: null,
  },
};

export default GameListModal;
