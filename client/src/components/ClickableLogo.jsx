import { Link } from "react-router-dom";
import LogoSrc from "../assets/images/logo-wild-gamy-v3.svg"
import "./ClickableLogo.scss";

function ClickableLogo() {
  return (
    <>
      <p>
        Rejoignez notre communauté de joueurs passionnés et découvrez nos bornes
        d'arcade !
      </p>
      <Link to="/GameList">
        {" "}
        <img
          src={LogoSrc}
          alt="go to GameListPage"
        />{" "}
      </Link>
      <p>Cliquez pour accéder à notre catalogue de jeux</p>
    </>
  );
}

export default ClickableLogo;
