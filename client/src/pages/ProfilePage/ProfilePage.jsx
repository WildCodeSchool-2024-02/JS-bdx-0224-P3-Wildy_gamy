
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth, AuthContext } from "../../context/AuthContext";

import "../../scss/index.scss";
import "./ProfilePage.scss";

import DisplayCoin from "../../components/DisplayCoin/DisplayCoin";
import ScoreDisplay from "../../components/ScoreDisplay/ScoreDisplay";
import GameList from "../../components/GameList/GameList";
import GameListModal from "../../components/GameListModal/GameListModal";
import ProfileInfos from "../../components/ProfileInfos/ProfileInfos";
import decodeToken from "../../services/decodeToken";

function ProfilePage() {
  const [gamesData, usersData] = useLoaderData();
  const navigate = useNavigate();
  const [showModalModify, setShowModalModify] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const { setAuth } = useContext(AuthContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeToken(token);
      setAuth(userData);
    }
  }, []);
  const { logout } = useAuth();

  const handleClickLogout = () => {
    logout();
    navigate("/");
  };

  const handleClickModal = (booleanState, setBooleanState) => () => {
    setBooleanState(!booleanState);
  };

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
      <ProfileInfos
        handleClickModal={handleClickModal}
        showModalModify={showModalModify}
        setShowModalModify={setShowModalModify}
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        usersData={usersData}
        handleClickLogout={handleClickLogout}
      />
      <ul className="coinContainer">
        <li>
          <DisplayCoin />
        </li>
      </ul>

      <p>Meilleurs scores</p>
      <ul className="scoreContainer">
        <li>
          <ScoreDisplay />
        </li>
      </ul>

      <p>Jeux favoris</p>
      <GameList gamesData={gamesData} openModal={openModal} />
      <GameListModal
        isOpen={showModal}
        onClose={closeModal}
        gamesData={selectedGame}
      />
    </>
  );
}

export default ProfilePage;
