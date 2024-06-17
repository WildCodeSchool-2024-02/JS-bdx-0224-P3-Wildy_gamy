import "../../scss/index.scss";
import "./HomePage.scss"
import { Link } from "react-router-dom";


const BASE_URL = import.meta.env.VITE_API_URL;
const logoWildyGamyWg = `${BASE_URL}/logo/logo-wildy-gamy-wg.svg`;


function HomePage() {
  return (
    <section>
      <h1>
        Rejoignez notre communauté de joueurs passionnés et découvrez nos bornes
        d'arcade !
      </h1>
      <Link to="/catalogue">
        {" "}
        <img src={logoWildyGamyWg} alt="aller à la page catalogue" />{" "}
      </Link>
      <h2>Cliquez pour accéder à notre catalogue de jeux</h2>
    </section>
  );
}

export default HomePage;
