import PropTypes from "prop-types";
import "./DeleteInfoModale.scss";

function DeleteInfoModale({ handleClickModal, showModalDelete, setShowModalDelete }) {
  return (
    <dialog open className="modalDelete">
      <p>
        Êtes-vous sûr de vouloir supprimer votre compte ? Vous perdrez
        définitevement tous vos scores et jetons.
      </p>
      <button
        type="button"
        onClick={handleClickModal(showModalDelete, setShowModalDelete)}
        className="returnButton"
      >
        Annuler
      </button>
      <button type="button" className="deleteButton">
        Supprimer mon compte
      </button>
      </dialog>
  );
}

DeleteInfoModale.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  showModalDelete: PropTypes.bool.isRequired,
  setShowModalDelete: PropTypes.func.isRequired,
};

export default DeleteInfoModale;
