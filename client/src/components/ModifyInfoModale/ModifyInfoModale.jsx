import PropTypes from "prop-types";
import "./ModifyInfoModale.scss";
import { Form } from "react-router-dom";

function ModifyInfoModale({ handleClickModify }) {
  return (
    <dialog className="dialog" open>
      <Form method="POST">
        <label>
          Prénom
          <input type="text" placeholder="John" className="placeholder" />
        </label>
        <label>
          Nom
          <input type="text" placeholder="Doe" className="placeholder" />
        </label>
        <label>
          Pseudo
          <input type="text" placeholder="JohnD33" className="placeholder" />
        </label>
        <label>
          Email
          <input type="email" placeholder="John@doe.com" />
        </label>
        <label>
          Mot de passe
          <input type="password" placeholder="**********" />
        </label>
      </Form>
      <button type="button" onClick={handleClickModify}>
        Appliquer les modifications
      </button>
    </dialog>
  );
}

ModifyInfoModale.propTypes = {
  handleClickModify: PropTypes.func.isRequired,
};

export default ModifyInfoModale;
