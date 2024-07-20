import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import GameListModal from "../../components/GameListModal/GameListModal";
import GameList from "../../components/GameList/GameList";
import NavigationChevron from "../../components/NavigationChevron/NavigationChevron";
import decodeToken from "../../services/decodeToken";
import { AuthContext } from "../../context/AuthContext";

function GameListPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);
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
      id: foundGame.id || null,
      name: foundGame.name,
      release_date: foundGame.release_date,
      description: foundGame.description,
      image_demo: foundGame.image_demo,
      demoLink: foundGame.demoLink,
      isFavorite: foundGame.is_favorite,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedGame(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeToken(token);
      setAuth(userData);
    }
  }, []);

  if (!gamesData) {
    return <h1>Loading...</h1>;
  }
  return (
    <main>
      <GameList gamesData={gamesData} openModal={openModal} />
      <GameListModal
        isOpen={showModal}
        onClose={closeModal}
        gamesData={selectedGame}
        auth={auth}
      />
      <NavigationChevron isUp />
    </main>
  );
}

export default GameListPage;
