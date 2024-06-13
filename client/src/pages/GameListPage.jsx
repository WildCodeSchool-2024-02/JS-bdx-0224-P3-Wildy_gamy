import gameImg from "../gameImg.json";
import "../scss/index.scss";
import "../scss/pages/gameListPage.scss";

function GameListPage() {
  return (
    <>
      <h2>Découvrez la liste des jeux disponibles dans nos salles</h2>
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
