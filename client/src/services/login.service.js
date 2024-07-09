import { toast } from "react-toastify";
import { sendData } from "./api.service";

const login = async (data) => {
  try {
    const { email, password } = data;
    if (!email || !password) {
      throw new Error("All fields are required");
    }
    const url = "/api/login";
    const response = await sendData(url, data, "POST");
    if (response.status === 200) {
      toast.success("Connexion réussie 👾");
      return { success: true };
    }
    throw new Error("Invalid response from server");
  } catch (error) {
    toast.error(error.message);
    return { success: false };
  }
};

export default login;
