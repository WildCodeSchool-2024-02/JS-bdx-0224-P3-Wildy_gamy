import { toast } from "react-toastify";

export async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    toast.error("Erreur lors de la récupération des données :");
    return null;
  }
}

export async function sendData(url, data, http) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: http,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    toast.error("Erreur lors de la récupération des données :");
    return null;
  }
}
