import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export default function decodeToken(token) {
  if (!token) return null;
  try {
    const decodedToken = jwtDecode(token);
    return {
      role: decodedToken.role,
      id: decodedToken.id,
    };
  } catch (error) {
    toast.error(error.message);
    return null;
  }
}
