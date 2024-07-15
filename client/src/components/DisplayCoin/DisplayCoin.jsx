import Coin from "../../assets/images/icon/Coin.svg";

import "./DisplayCoin.scss";

function DisplayCoin() {
  return (
    <figure className="coinCard">
      <img src={Coin} alt="Jeton" />
      <figcaption>
        Vous avez jusqu’au 01/01/2024 pour échanger ce jeton contre un de nos
        prix
      </figcaption>
    </figure>
  );
}

export default DisplayCoin;
