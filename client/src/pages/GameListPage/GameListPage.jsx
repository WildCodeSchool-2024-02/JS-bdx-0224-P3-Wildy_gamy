import gameImg from "../../data/gameImg.json";
import "../../scss/index.scss";
import "./GameListPage.scss";

function GameListPage() {
  return (
    <>
      <h1>Découvrez la liste des jeux disponibles dans nos salles</h1>
      <section className="image-list">
        {gameImg.map((image) => (
          <button type="button" key={image.name} className="game-image">
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </section>
    </>
  );
}

export default GameListPage;
