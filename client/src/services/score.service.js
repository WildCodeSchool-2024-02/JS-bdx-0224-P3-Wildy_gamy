import { toast } from "react-toastify";
import { sendData } from "./api.service";

const sendScore = async (data) => {
  try {
    const { score, userId, gameId } = data;
    if (!score || !userId || !gameId) {
      throw new Error("All fields are required");
    }

    const scoreUrl = "/api/parties";
    const response = await sendData(scoreUrl, data, "POST");

    if (response.status === 201) {
      toast.success("Votre score a bien été enregistré !");

      // const threshold = 100; 
      // if (score >= threshold) {
      //   console.log(score);
      //   const coinUrl = "/api/coins";
      //   const coinData = { userId };
      //   const coinResponse = await sendData(coinUrl, coinData, "POST");

      //   if (coinResponse.status === 201) {
      //     toast.success("Vous avez gagné un coin !");
      //   } else {
      //     toast.error("Erreur lors de l'envoi du coin");
      //   }
      // }

      return { success: true };
    }

    throw new Error("Error sending score");
  } catch (error) {
    toast.error(error.message);
    return { success: false };
  }
};

export default sendScore;

