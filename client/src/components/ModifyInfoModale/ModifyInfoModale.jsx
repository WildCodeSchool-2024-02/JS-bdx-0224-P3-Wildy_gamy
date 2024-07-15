import PropTypes from "prop-types";
import "./ModifyInfoModale.scss";
import { Form } from "react-router-dom";

function ModifyInfoModale({
  handleClickModal,
  showModalModify,
  setShowModalModify,
  userInfos,
}) {
  return (
    <dialog className="dialog" open>
      <Form method="PUT">
        <label>
          Prénom
          <input
            type="text"
            placeholder={userInfos.firstname}
            className="placeholder"
          />
        </label>
        <label>
          Nom
          <input
            type="text"
            placeholder={userInfos.lastname}
            className="placeholder"
          />
        </label>
        <label>
          Pseudo
          <input
            type="text"
            placeholder={userInfos.pseudo}
            className="placeholder"
          />
        </label>
        <label>
          Email
          <input type="email" placeholder={userInfos.email} />
        </label>
        <label>
          Mot de passe
          <input type="password" placeholder="Mot de passe" />
        </label>
      </Form>
      <button
        type="button"
        onClick={handleClickModal(showModalModify, setShowModalModify)}
      >
        Appliquer les modifications
      </button>
    </dialog>
  );
}

ModifyInfoModale.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  showModalModify: PropTypes.bool.isRequired,
  setShowModalModify: PropTypes.func.isRequired,
  userInfos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModifyInfoModale;
