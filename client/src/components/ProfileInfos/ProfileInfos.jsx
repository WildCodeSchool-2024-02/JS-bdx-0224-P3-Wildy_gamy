import PropTypes from "prop-types";

import ModifyInfoModale from "../ModifyInfoModale/ModifyInfoModale";
import DeleteInfoModale from "../DeleteInfoModale/DeleteInfoModale";

import Avatar from "../../assets/images/avatar/Avatar-basic.svg";

function ProfileInfos({
  handleClickModal,
  showModalModify,
  setShowModalModify,
  showModalDelete,
  setShowModalDelete,
  usersData,
}) {
  const userInfos = { ...usersData };
  return (
    <>
      <h1>Profil</h1>
      <img src={Avatar} alt="avatar par defaut" className="avatarImg" />
      <h2>{userInfos[0].pseudo}</h2>
      <button
        type="button"
        onClick={handleClickModal(showModalModify, setShowModalModify)}
        className="buttonModify"
      >
        Modifier mes infos
      </button>
      <button
        type="button"
        onClick={handleClickModal(showModalDelete, setShowModalDelete)}
        className="buttonModify"
      >
        Supprimer mon compte
      </button>
      {showModalModify && (
        <ModifyInfoModale
          handleClickModal={handleClickModal}
          showModalModify={showModalModify}
          setShowModalModify={setShowModalModify}
          userInfos={userInfos}
        />
      )}
      {showModalDelete && (
        <DeleteInfoModale
          handleClickModal={handleClickModal}
          showModalDelete={showModalDelete}
          setShowModalDelete={setShowModalDelete}
        />
      )}
    </>
  );
}

ProfileInfos.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  showModalModify: PropTypes.bool.isRequired,
  setShowModalModify: PropTypes.func.isRequired,
  showModalDelete: PropTypes.bool.isRequired,
  setShowModalDelete: PropTypes.func.isRequired,
  usersData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileInfos;
