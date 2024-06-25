import { useLoaderData } from "react-router-dom";
import "./RewardPage.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function RewardPage() {
  const rewards = useLoaderData();

  return (
    <>
      <h1>Liste des récompenses</h1>
      <ul className="reward-list">
        {rewards.map((reward) => (
          <li key={reward.id} className="flip-card">
            <figure className="flip-card-inner">
              <button
                className="flip-card-front"
                type="button"
                aria-label={`Voir l'image de la récompense ${reward.name}`}
              >
                <img
                  src={`${BASE_URL}/reward/${reward.image}`}
                  alt={`Illustration de la récompense ${reward.name}`}
                  className="img-reward"
                />
              </button>
              <button
                className="flip-card-back"
                type="button"
                aria-label={`Voir la description de la récompense ${reward.name}`}
              >
                <figcaption>
                  <strong>{reward.name}</strong>: {reward.description}
                  <p>Quantité disponible: {reward.remaining_quantity}</p>
                  <p>Prix: {reward.price} jetons</p>
                </figcaption>
              </button>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RewardPage;
