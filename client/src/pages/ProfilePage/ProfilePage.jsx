import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../../context/AuthContext";

import "../../scss/index.scss";
import "./ProfilePage.scss";

import DisplayCoin from "../../components/DisplayCoin/DisplayCoin";
import ScoreDisplay from "../../components/ScoreDisplay/ScoreDisplay";
import ProfileInfos from "../../components/ProfileInfos/ProfileInfos";

function ProfilePage() {
  const userData = useLoaderData();
  const navigate = useNavigate();
  const [showModalModify, setShowModalModify] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const { logout } = useAuth();

  const handleClickLogout = () => {
    logout();
    navigate("/");
  };

  const handleClickModal = (booleanState, setBooleanState) => () => {
    setBooleanState(!booleanState);
  };
  return (
    <>
      <ProfileInfos
        handleClickModal={handleClickModal}
        showModalModify={showModalModify}
        setShowModalModify={setShowModalModify}
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        userData={userData}
        handleClickLogout={handleClickLogout}
      />
      <ul className="coinContainer">
        <li>
          <DisplayCoin />
        </li>
      </ul>

      <p className="bestScore">Mes 3 meilleurs scores</p>
      <ul className="scoreContainer">
        <li>
          {userData.scores &&
            userData.scores.map((score) => (
              <ScoreDisplay key={uuidv4()} score={score} />
            ))}
        </li>
      </ul>

      <p className="favoriteGame">Jeux favoris</p>
    </>
  );
}

export default ProfilePage;
