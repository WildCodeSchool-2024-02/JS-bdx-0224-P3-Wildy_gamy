import PropTypes from "prop-types";
import "./DeleteInfoModale.scss";

function DeleteInfoModale({ handleClickDelete }) {
  return (
    <dialog open className="modalDelete">
      <p className="deletePhrase">
        Êtes-vous sûr de vouloir supprimer votre compte ? Vous perdrez
        définitevement tous vos scores et jetons.
      </p>
      <button
        type="button"
        onClick={handleClickDelete}
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
  handleClickDelete: PropTypes.func.isRequired,
};

export default DeleteInfoModale;
