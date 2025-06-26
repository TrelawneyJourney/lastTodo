import { useEffect, useState } from "react";
import { SERVER_URL } from "../../config";

export default function useFetchCat() {
  const [dataCat, setDataCat] = useState([]);
  const userEmail = "anto@gmail.com";

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getDataCat = async () => {
      try {
        const response = await fetch(
          `${SERVER_URL}/nuevaCategorias/${userEmail}`,
          {
            signal,
          }
        );
        if (!response.ok) {
          throw new Error(
            `Error al obtener los datos de la nueva categoria ${response.status}`
          );
        }

        const data = await response.json();
        console.log("la nueva categoria es: ", data);
        setDataCat(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    getDataCat();
    return () => controller.abort();
  }, []);

  return { dataCat, setDataCat };
}
