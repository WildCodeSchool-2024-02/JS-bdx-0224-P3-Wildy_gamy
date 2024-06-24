import { useLoaderData } from "react-router-dom";

function RewardPage() {
  const rewards = useLoaderData();

  return (
    <>
      <h1>Liste des récompenses</h1>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>
            <strong>{reward.name}</strong>: {reward.description}
            <p>Quantité disponible: {reward.quantity}</p>
            <p>Prix: {reward.price}</p>
            <img src={reward.image} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default RewardPage;
