import { jwtDecode } from "jwt-decode";

export default function decodeToken(token) {
  if (!token) return null;
  try {
    const decodedToken = jwtDecode(token);
    return {
      role: decodedToken.role,
      id: decodedToken.id,
    };
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}
