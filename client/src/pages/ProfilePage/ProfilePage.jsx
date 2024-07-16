import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
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

      <p>Meilleurs scores</p>
      <ul className="scoreContainer">
        <li>
          <ScoreDisplay />
        </li>
      </ul>

      <p>Jeux favoris</p>
    </>
  );
}

export default ProfilePage;
