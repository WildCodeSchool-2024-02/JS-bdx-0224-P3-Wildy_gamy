import PropTypes from "prop-types";

import ModifyInfoModale from '../ModifyInfoModale/ModifyInfoModale'
import DeleteInfoModale from '../DeleteInfoModale/DeleteInfoModale'

import Avatar from "../../assets/images/avatar/Avatar-basic.svg";

function ProfileInfos({handleClickModal, showModalModify, setShowModalModify, showModalDelete, setShowModalDelete}) {
  return (
    <>
    <h1>Profile</h1>
      <img src={Avatar} alt="avatar par defaut" className="avatarImg" />
      <h2>John Doe</h2>
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
  )
}

ProfileInfos.propTypes = {
    handleClickModal: PropTypes.func.isRequired,
    showModalModify: PropTypes.bool.isRequired,
    setShowModalModify: PropTypes.func.isRequired,
    showModalDelete: PropTypes.bool.isRequired,
    setShowModalDelete: PropTypes.func.isRequired,
  };

export default ProfileInfos