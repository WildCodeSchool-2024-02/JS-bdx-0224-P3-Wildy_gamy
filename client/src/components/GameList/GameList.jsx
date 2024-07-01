import PropTypes from "prop-types";
import "./GameList.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function GameList({ gamesData, openModal }) {
  return (
    <>
      <h1>Découvrez la liste des jeux disponibles dans nos salles</h1>
      <ul className="image-list">
        {gamesData.map((game) => (
          <li key={game.id} className="game-image">
            <button
              type="button"
              onClick={() => openModal(game.name)}
              aria-label="Ouverture de la modale du jeu"
            >
              <img
                src={`${BASE_URL}/${game.image_game}`}
                alt={`Jeu: ${game.name}`}
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

GameList.propTypes = {
  gamesData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image_demo: PropTypes.string.isRequired,
      image_game: PropTypes.string.isRequired,
      is_playable: PropTypes.number.isRequired,
      release_date: PropTypes.number.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default GameList;
