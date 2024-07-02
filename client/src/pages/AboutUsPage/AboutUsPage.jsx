import "./AboutUsPage.scss";
import logoWildyGamyWg from "../../assets/images/logo/logo-wildy-gamy.svg";

function AboutUsPage() {
  return (
    <article className="scrolling-content">
      <img src={logoWildyGamyWg} alt="" />
      <h1>Entrez dans le futur rétro chez Wildy Gamy !</h1>
      <p>
        Nous sommes plus qu’une simple salle d’arcade. Nous sommes une
        passerelle vers le passé, un portail vers l’âge d’or des jeux vidéo. Nos
        lumières au néon vous guideront vers des aventures palpitantes.
      </p>
      <p>
        Notre espace est imprégné de l’esprit des années 80 et 90, avec des murs
        ornés d’affiches vintage, des néons chatoyants et une ambiance
        électrisante. Nos bornes d’arcade authentiques vous transportent dans
        des mondes pixelisés où les high scores sont rois.
      </p>
    </article>
  );
}

export default AboutUsPage;
