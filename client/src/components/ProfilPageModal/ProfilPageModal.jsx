import PropTypes from "prop-types";
import ModifyInfoModale from "../ModifyInfoModale/ModifyInfoModale";
import DeleteInfoModale from "../DeleteInfoModale/DeleteInfoModale";

import "./ProfilPageModal.scss"

function ProfilPageModal({
  showModalModify,
  showModalDelete,
  handleClickModify,
  handleClickDelete,
}) {
  return (
    <>
      {showModalModify && (
        <dialog open className="modifyInfoModal">
          <ModifyInfoModale handleClickModify={handleClickModify} />
        </dialog>
      )}
      {showModalDelete && (
        <dialog open className="deleteInfoModal">
          <DeleteInfoModale handleClickDelete={handleClickDelete} />
        </dialog>
      )}
    </>
  );
}

ProfilPageModal.propTypes = {
  showModalModify: PropTypes.bool.isRequired,
  showModalDelete: PropTypes.bool.isRequired,
  handleClickModify: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};

export default ProfilPageModal;
