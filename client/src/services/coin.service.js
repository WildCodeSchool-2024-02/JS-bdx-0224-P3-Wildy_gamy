import { toast } from "react-toastify";
import { sendData } from "./api.service";

const sendCoin = async (userId) => {
  try {
    const coinUrl = "/api/coins";
    const coinData = { userId };
    const coinResponse = await sendData(coinUrl, coinData, "POST");

    if (coinResponse.status === 201) {
      toast.success("Vous avez gagné un coin !");
      return { success: true };
    }
    throw new Error("Erreur lors de l'envoi du coin");
  } catch (error) {
    toast.error(error.message);
    return { success: false };
  }
};

export default sendCoin;
