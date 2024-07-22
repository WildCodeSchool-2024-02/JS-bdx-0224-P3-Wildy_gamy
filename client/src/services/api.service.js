import { redirect } from "react-router-dom";
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    toast.error("Erreur lors de la récupération des données :");
    return null;
  }
}

export async function fetchMultipleApis(urls) {
  const baseUrl = import.meta.env.VITE_API_URL;
  const fullUrls = urls.map((url) => baseUrl + url);

  const responses = await Promise.all(
    fullUrls.map((url) =>
      fetch(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
    )
  );
  const dataPromises = responses.map((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
  return Promise.all(dataPromises);
}

export async function handleFormAction(request, actionFunction, redirectPath) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const method = request.method.toUpperCase();

  const result = await actionFunction(data, method);

  if (result.success && redirectPath) {
    return redirect(redirectPath);
  }

  return result;
}
