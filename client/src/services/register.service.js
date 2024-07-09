import { toast } from "react-toastify";
import { sendData } from "./api.service";

const register = async (data) => {
  try {
    const { firstname, lastname, pseudo, email, password } = data;
    if (!firstname || !lastname || !pseudo || !email || !password) {
      throw new Error("All fields are required");
    }
    const url = "/api/users";
    const response = await sendData(url, data, "POST");
    if (response.status === 201) {
      toast.success("Inscription réussie 👾");
      return { success: true };
    }
    throw new Error("Invalid response from server");
  } catch (error) {
    toast.error(error.message);
    return { success: false };
  }
};

export default register;
