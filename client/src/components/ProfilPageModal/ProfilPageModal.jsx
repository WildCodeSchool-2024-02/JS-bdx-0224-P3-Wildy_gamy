import PropTypes from "prop-types";
import ModifyInfoModale from "../ModifyInfoModale/ModifyInfoModale";
import DeleteInfoModale from "../DeleteInfoModale/DeleteInfoModale";

function ProfilPageModal({ showModalModify, showModalDelete, handleClickModify, handleClickDelete,  }) {
  return (
    <dialog open className="modalDelete">
      {showModalModify && <ModifyInfoModale handleClickModify={handleClickModify} />}
      {showModalDelete && <DeleteInfoModale handleClickDelete={handleClickDelete} />}
    </dialog>
  );
}

ProfilPageModal.propTypes = {
  showModalModify: PropTypes.bool.isRequired,
  showModalDelete: PropTypes.bool.isRequired,
  handleClickModify: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};

export default ProfilPageModal;
