import { useState } from "react";
import GameListModal from "../components/GameListModal";
import gameImg from "../gameImg.json";
import gameData from "../gameData.json";

import "../scss/index.scss";
import "../scss/pages/gameListPage.scss";

function GameListPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClick = (gameName) => {
    const gameList = gameData.find(
      (game) => game.title.toLowerCase() === gameName.toLowerCase()
    );
    if (gameList) {
      setSelectedGame(gameList);
      setShowModal(true);
    }
  };

  return (
    <>
      <h1>Découvrez la liste des jeux disponibles dans nos salles</h1>
      <section className="image-list">
        {gameImg.map((image) => (
          <button
            type="button"
            key={image.name}
            className="game-image"
            onClick={() => handleClick(image.name)}
          >
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </section>
      {showModal && (
        <GameListModal
          game={selectedGame}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default GameListPage;
