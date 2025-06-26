import { useEffect, useState } from "react";
import { SERVER_URL } from "../../config";

export default function useFetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userEmail = "anto@gmail.com";
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getData = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/todos/${userEmail}`, {
          signal,
        });
        if (!response.ok)
          throw new Error(`Error al obtener los datos: ${response.status}`);

        const data = await response.json();
        console.log("Los datos son: ", data);
        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
    return () => controller.abort();
  }, []);

  return { data, setData, loading, error };
}
