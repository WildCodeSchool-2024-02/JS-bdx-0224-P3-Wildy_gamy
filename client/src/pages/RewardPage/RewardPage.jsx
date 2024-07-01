import { useLoaderData } from "react-router-dom";
import "./RewardPage.scss";
import FlipCard from "../../components/FlipCard/FlipCard";

function RewardPage() {
  const rewards = useLoaderData();

  return (
    <>
      <h1>
        Jouez à une démo et atteignez un certain score pour obtenir des jetons
        échangeables par des prix en boutique
      </h1>
      <ul className="reward-list">
        {rewards.map((reward) => (
          <li className="flip-card-list" key={reward.id}>
            <FlipCard reward={reward} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default RewardPage;
