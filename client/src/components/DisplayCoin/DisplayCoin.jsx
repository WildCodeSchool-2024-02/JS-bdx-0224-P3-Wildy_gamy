import PropTypes from "prop-types";
import Coin from "../../assets/images/icon/Coin.svg";

import "./DisplayCoin.scss";

function DisplayCoin({ expirationDate }) {
  return (
    <figure className="coinCard">
      <img src={Coin} alt="Jeton" />
      <figcaption>
        Vous avez jusqu’au {expirationDate} pour échanger ce jeton contre un de
        nos prix
      </figcaption>
    </figure>
  );
}

DisplayCoin.propTypes = {
  expirationDate: PropTypes.string,
};

DisplayCoin.defaultProps = {
  expirationDate: "",
};

export default DisplayCoin;
