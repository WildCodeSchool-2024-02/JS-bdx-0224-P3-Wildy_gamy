import PropTypes from "prop-types";
import "./ModifyInfoModale.scss";

function ModifyInfoModale({ handleClickModify }) {
  return (
      <form className="form">
        <label className="label">
          Prénom
          <input type="text" placeholder="John" className="placeholder" />
        </label>
        <label className="label">
          Nom
          <input type="text" placeholder="Doe" className="placeholder" />
        </label>
        <label className="label">
          Pseudo
          <input type="text" placeholder="JohnD33" className="placeholder" />
        </label>
        <label className="label">
          Email
          <input
            type="email"
            placeholder="John@doe.com"
            className="placeholder"
          />
        </label>
        <label className="label">
          Mot de passe
          <input
            type="password"
            placeholder="**********"
            className="placeholder"
          />
        </label>
        <button
          type="button"
          onClick={handleClickModify}
          className="formButton"
        >
          Appliquer les modifications
        </button>
      </form>
  );
}

ModifyInfoModale.propTypes = {
  handleClickModify: PropTypes.func.isRequired,
};

export default ModifyInfoModale;
