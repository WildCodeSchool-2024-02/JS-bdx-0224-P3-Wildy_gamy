import { toast } from "react-toastify";
import { sendData } from "./api.service";

const favoriteGame = async (data, method) => {
  try {
    const { userId, gameId } = data;

    if (!userId || !gameId) {
      throw new Error("All fields are required");
    }

    const url = "/api/favorites";
    const response = await sendData(url, data, method);

    if (response.status === 201) {
      toast.success("Jeu ajouté aux favoris !");
      return { success: true };
    }

    if (response.status === 204) {
      toast.success("Jeu retiré de vos favoris");
      return { success: true };
    }

    throw new Error("Invalid response from server");
  } catch (error) {
    toast.error(error.message);
    return { success: false };
  }
};

export default favoriteGame;
