import PropTypes from "prop-types";
import "./DeleteInfoModale.scss";
import { Form } from "react-router-dom";

function DeleteInfoModale({
  handleClickModal,
  showModalDelete,
  setShowModalDelete,
}) {

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
      <Form method="DELETE">
      <button
        type="submit"
        className="deleteButton"
      >
        Supprimer mon compte
      </button>
      </Form>
    </dialog>
  );
}

DeleteInfoModale.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  showModalDelete: PropTypes.bool.isRequired,
  setShowModalDelete: PropTypes.func.isRequired,
};

export default DeleteInfoModale;
