import PropTypes from "prop-types";

function GameListModal({ game, onClose }) {
  return (
    <div className="modal">
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <img src={game.image_demo} alt={game.title} />
      <a href={game.demoLink}>Play Demo</a>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

GameListModal.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_demo: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GameListModal;
