import { toast } from "react-toastify";
import { sendData } from "./api.service";

const sendScore = async (data) => {
  try {
    const { score, userId, gameId } = data;
    if (!score || !userId || !gameId) {
      throw new Error("All fields are required");
    }
    const url = "/api/parties";
    const response = await sendData(url, data, "POST");
    if (response.status === 201) {
      toast.success("Votre score a bien été enregistré !");
      return { success: true };
    }
    throw new Error("Error sending score");
  } catch (error) {
    toast.error(error.message);
    return { success: false };
  }
};

export default sendScore;
