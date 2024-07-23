import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../../context/AuthContext";

import "../../scss/index.scss";
import "./ProfilePage.scss";

import DisplayCoin from "../../components/DisplayCoin/DisplayCoin";
import ScoreDisplay from "../../components/ScoreDisplay/ScoreDisplay";
import ProfileInfos from "../../components/ProfileInfos/ProfileInfos";
import GameList from "../../components/GameList/GameList";
import GameListModal from "../../components/GameListModal/GameListModal";
import NavigationChevron from "../../components/NavigationChevron/NavigationChevron";

function ProfilePage() {
  const [userData, gamesData] = useLoaderData();
  const navigate = useNavigate();
  const [showModalModify, setShowModalModify] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const favoriteGames = gamesData.filter((game) => game.is_favorite);

  const { logout } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const { auth } = useContext(AuthContext);

  const openModal = (gameName) => {
    const normalizedGameName = gameName.toLowerCase();
    const foundGame = gamesData.find(
      (games) => games.name.toLowerCase() === normalizedGameName
    );
    if (!foundGame) {
      return;
    }

    setSelectedGame({
      id: foundGame.id,
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

  const handleClickLogout = () => {
    logout();
    navigate("/");
  };

  const handleClickModal = (booleanState, setBooleanState) => () => {
    setBooleanState(!booleanState);
  };

  return (
    <main>
      <ProfileInfos
        handleClickModal={handleClickModal}
        showModalModify={showModalModify}
        setShowModalModify={setShowModalModify}
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        userData={userData}
        handleClickLogout={handleClickLogout}
      />
      {userData.coins.length > 0 && (
        <ul className="coinContainer">
          {userData.coins.map((coin) => (
            <li key={coin.id}>
              <DisplayCoin expirationDate={coin.expiration_date} />
            </li>
          ))}
        </ul>
      )}
      {userData.parties.length > 0 && (
        <>
          <p className="bestScore">Mes 3 meilleurs scores</p>
          <ul className="scoreContainer">
            {userData.parties.map((party) => (
              <li key={party.id}>
                <ScoreDisplay score={party.score} />
              </li>
            ))}
          </ul>
        </>
      )}
      {favoriteGames.length > 0 && (
        <>
          <p className="favoriteGame">Jeux favoris</p>
          <GameList gamesData={favoriteGames} openModal={openModal} />
          <GameListModal
            isOpen={showModal}
            onClose={closeModal}
            gamesData={selectedGame}
            auth={auth}
          />
        </>
      )}
      <NavigationChevron isUp />
    </main>
  );
}

export default ProfilePage;
