import PropTypes from 'prop-types';
import "./ModifyInfoModale.scss";


function ModifyInfoModale({handleClick}) {
  

  return (
        <dialog className="dialog" open>
            <form className="form">
                <label>Prénom
                <input type="text" placeholder="John" /></label>
                <label>Nom
                <input type="text" placeholder="Doe" /></label>
                <label>Pseudo
                <input type="text" placeholder="JohnD33" /></label>
                <label>Email
                <input type="email" placeholder="John@doe.com" /></label>
                <label>Mot de passe
                <input type="password" placeholder="**********" /></label>
              <button type="button" onClick={handleClick}>Appliquer les modifications</button>
            </form>
        </dialog>
  );
}

ModifyInfoModale.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ModifyInfoModale;
