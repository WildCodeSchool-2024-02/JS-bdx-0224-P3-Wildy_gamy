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
    const game = gameData.find(
      (g) => g.title.toLowerCase() === gameName.toLowerCase()
    );
    if (game) {
      setSelectedGame(game);
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1>Découvrez la liste des jeux disponibles dans nos salles</h1>
      <section className="image-list">
        {gameImg.map((image) => (
          <div
            key={image.name}
            className="game-image"
            onClick={() => handleClick(image.name)}
            onKeyDown={(e) => e.key === "Enter" && handleClick(image.name)}
            role="button"
            tabIndex={0}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </section>
      {showModal && (
        <GameListModal game={selectedGame} onClose={handleModalClose} />
      )}
    </>
  );
}

export default GameListPage;
