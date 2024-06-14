import { Link } from "react-router-dom";
import LogoSrc from "../assets/images/logo-wild-gamy-v3.svg"
import "./ClickableLogo.scss";

function ClickableLogo() {
  return (
    <>
      <h2>
        Rejoignez notre communauté de joueurs passionnés et découvrez nos bornes
        d'arcade !
      </h2>
      <Link to="/GameList">
        {" "}
        <img
          src={LogoSrc}
          alt="aller à la page catalogue"
        />{" "}
      </Link>
      <p>Cliquez pour accéder à notre catalogue de jeux</p>
    </>
  );
}

export default ClickableLogo;
