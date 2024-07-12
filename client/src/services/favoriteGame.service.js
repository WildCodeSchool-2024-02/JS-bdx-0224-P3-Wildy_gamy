import { toast } from "react-toastify";
import { sendData } from "./api.service";

const favoriteGame = async (data) => {
  try {
    const { userId, gameId, favoriteCheckbox } = data;
    // console.log(userId, gameId, favoriteCheckbox);
    if (!userId || !gameId) {
      throw new Error("User ID and Game ID are required");
    }
    const url = "/api/favorites";
    const response = await sendData(
      url,
      { userId, gameId, favoriteCheckbox },
      "POST"
    );
    if (response.status === 200) {
      toast.success("Jeu ajouté aux favoris !");
      return { success: true };
    }
    throw new Error("Invalid response from server");
  } catch (error) {
    toast.error(error.message);
    return { success: false };
  }
};

export default favoriteGame;
