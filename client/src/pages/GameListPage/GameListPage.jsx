import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GameListModal from "../../components/GameListModal/GameListModal";
import GameList from "../../components/GameList/GameList";
import NavigationChevron from "../../components/NavigationChevron/NavigationChevron";

import "../../scss/index.scss";

function GameListPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const gamesData = useLoaderData();

  const openModal = (gameName) => {
    const normalizedGameName = gameName.toLowerCase();
    const foundGame = gamesData.find(
      (games) => games.name.toLowerCase() === normalizedGameName
    );
    if (!foundGame) {
      return;
    }

    setSelectedGame({
      name: foundGame.name,
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
      <GameList gamesData={gamesData} openModal={openModal} />
      <GameListModal
        isOpen={showModal}
        onClose={closeModal}
        gamesData={selectedGame}
      />
      <NavigationChevron route="" isUp />
    </>
  );
}

export default GameListPage;
