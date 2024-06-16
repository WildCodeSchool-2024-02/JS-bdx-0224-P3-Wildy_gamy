import "../scss/index.scss";
import "./HomePage.scss"
import { Link } from "react-router-dom";
import LogoSrc from "../assets/images/logo-wild-gamy-v3.svg"


function HomePage() {
  return (
    <>
      <h1>
        Rejoignez notre communauté de joueurs passionnés et découvrez nos bornes
        d'arcade !
      </h1>
      <Link to="/Catalogue">
        {" "}
        <img src={LogoSrc} alt="aller à la page catalogue" />{" "}
      </Link>
      <p>Cliquez pour accéder à notre catalogue de jeux</p>
    </>
  );
}

export default HomePage;
