import { useState } from "react";
import gameImg from "../../data/gameImg.json";
import gameData from "../../data/gameData.json";
import GameListModal from "../../components/GameListModal/GameListModal";
import "../../scss/index.scss";
import "./GameListPage.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function GameListPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const openModal = (gameName) => {
    const normalizedGameName = gameName.toLowerCase();
    const foundGame = gameData.find(
      (game) => game.title.toLowerCase() === normalizedGameName
    );
    if (!foundGame) {
      return;
    }

    setSelectedGame({
      title: foundGame.title,
      release_date: foundGame.release_date,
      description: foundGame.description,
      image_demo: foundGame.image_demo,
      demoLink: foundGame.demoLink,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedGame(null);
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
            onClick={() => openModal(image.name)}
          >
            <img src={`${BASE_URL}/${image.src}`} alt={image.alt} />
          </button>
        ))}
      </section>

      <GameListModal
        isOpen={showModal}
        onClose={closeModal}
        game={selectedGame}
      />
    </>
  );
}

export default GameListPage;
