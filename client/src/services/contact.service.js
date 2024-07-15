import { toast } from "react-toastify";
import { sendData } from "./api.service";

const sendEmail = async (data) => {
  try {
    const { firstname, lastname, email, message } = data;
    if (!firstname || !lastname || !email || !message) {
      throw new Error("All fields are required");
    }
    const url = "/api/contacts";
    const response = await sendData(url, data, "POST");
    if (response.status === 200) {
      toast.success("Merci pour votre message 👾");
      return { success: true };
    }
    throw new Error("Invalid response from server");
  } catch (error) {
    toast.error(error.message);
    return { success: false };
  }
};

export default sendEmail;
