import { useState } from "react";

import ModifyInfoModale from "../../components/ModifyInfoModale/ModifyInfoModale";
// import DeleteInfoModale from "../../components/DeleteInfoModale/DeleteInfoModale";

import Avatar from "../../assets/images/avatar/Avatar-basic.svg";

function ProfilePage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const handleClick = () => { setShowModal(false); };
  
  return (
    <>
      <h1>Profile</h1>
      <img src={Avatar} alt="avatar de base" />
      <button
        type="button"
        onClick={openModal}
        aria-label="Ouverture de la modale modifier mes informations"
      >
        Modifier mes infos
      </button>
       { showModal && <ModifyInfoModale
        handleClick={handleClick}
      />
      }
    </>
  );
}

export default ProfilePage;
