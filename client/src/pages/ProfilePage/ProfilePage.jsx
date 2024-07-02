import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "../../scss/index.scss";
import "./ProfilePage.scss";

import ModifyInfoModale from "../../components/ModifyInfoModale/ModifyInfoModale";
import DeleteInfoModale from "../../components/DeleteInfoModale/DeleteInfoModale";
import DisplayCoin from "../../components/DisplayCoin/DisplayCoin";
import ScoreDisplay from "../../components/ScoreDisplay/ScoreDisplay";
import GameList from "../../components/GameList/GameList";
import GameListModal from "../../components/GameListModal/GameListModal";

import Avatar from "../../assets/images/avatar/Avatar-basic.svg";

function ProfilePage() {
  const gamesData = useLoaderData();
  const [showModalModify, setShowModalModify] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const openModalModify = () => setShowModalModify(true);
  const handleClickModify = () => {
    setShowModalModify(false);
  };
  const openModalDelete = () => setShowModalDelete(true);
  const handleClickDelete = () => {
    setShowModalDelete(false);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

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
      <h1>Profile</h1>
      <img src={Avatar} alt="avatar par defaut" className="avatarImg" />
      <h2>John Doe</h2>
      <button
        type="button"
        onClick={openModalModify}
        aria-label="Ouverture de la modale modifier mes informations"
        className="buttonModify"
      >
        Modifier mes infos
      </button>
      <button
        type="button"
        onClick={openModalDelete}
        aria-label="Ouverture de la modale supprimer mes informations"
        className="buttonModify"
      >
        Supprimer mon compte
      </button>
      {showModalModify && (
        <ModifyInfoModale handleClickModify={handleClickModify} />
      )}
      {showModalDelete && (
        <DeleteInfoModale handleClickDelete={handleClickDelete} />
      )}
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
