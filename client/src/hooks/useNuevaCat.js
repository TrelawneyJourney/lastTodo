import { useState } from "react";
import { SERVER_URL } from "../../config";

export default function useNuevaCat({ dataCat, setDataCat }) {
  const [titulo, setTitulo] = useState("");
  const [emoji, setEmoji] = useState("");
  // const [userEmail, setUserEmail] = useState("ejemplo@correo.com");

  //crear nueva categoria
  const postNuevaCat = async (e) => {
    e.preventDefault();

    const newCategoria = {
      user_email: "anto@gmail.com",
      titulo,
      emoji,
    };
    try {
      const response = await fetch(`${SERVER_URL}/nuevaCategorias`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCategoria),
      });
      const data = await response.json();
      if (response.status === 200) {
        setDataCat((prev) => [...prev, data]);
        console.log("Se creo la nueva cat", data);
      }

      //limpio inputs
      setTitulo("");
      setEmoji("");
    } catch (error) {
      console.error("Error al enviar la nueva categoria", error);
    }
  };

  //eliminar categoria
  const deleteCategoria = async (catId) => {
    try {
      const response = await fetch(`${SERVER_URL}/nuevaCategorias/${catId}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        setDataCat((prev) => prev.filter((cat) => cat.id !== catId));
        console.log("categoría eliminada correctamente.");
      } else {
        console.error("Error al eliminar la categoría: ", response.status);
      }
    } catch (error) {
      console.log("Error al eliminar la categoría: ", error);
    }
  };

  return {
    titulo,
    setTitulo,
    emoji,
    setEmoji,
    postNuevaCat,
    deleteCategoria,
  };
}
