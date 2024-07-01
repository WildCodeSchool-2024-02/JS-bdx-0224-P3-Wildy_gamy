import { useState } from "react";

import "../../scss/index.scss";
import "./ProfilePage.scss";

import ModifyInfoModale from "../../components/ModifyInfoModale/ModifyInfoModale";
import DeleteInfoModale from "../../components/DeleteInfoModale/DeleteInfoModale";

import Avatar from "../../assets/images/avatar/Avatar-basic.svg";

function ProfilePage() {
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

  return (
    <>
      <h1>Profile</h1>
      <img src={Avatar} alt="avatar de base" className="avatarImg" />
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
    </>
  );
}

export default ProfilePage;
