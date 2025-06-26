import { useState } from "react";
import { SERVER_URL } from "../../config";
import { categories } from "../constant";

export default function useTodo({ todos, setTodos }) {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState(categories);

  //enviar toDo
  const postData = async (e) => {
    e.preventDefault();

    const newTodo = {
      user_email: "anto@gmail.com",
      texto,
      categoria,
    };

    try {
      const response = await fetch(`${SERVER_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      const data = await response.json();

      if (response.status === 200) {
        console.log("Se creo:", data);
        setTodos((prev) => [...prev, newTodo]);
        console.log("funciono");
      }
      //limpiar inputs
      setTexto("");
      setCategoria("");
    } catch (error) {
      console.error("Nop, no funciono", error);
    }
  };

  //eliminar toDo
  const deleteData = async (todoId) => {
    try {
      const response = await fetch(`${SERVER_URL}/todos/${todoId}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
        console.log("eliminado");
      } else {
        console.error("Error al eliminar tarea:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //todo completado/realizado
  const checkedTodo = async (todoId) => {
    const todoToComplete = todos.find((todo) => todo.id === todoId);
    const nuevoEstado = !todoToComplete.completado;

    try {
      const response = await fetch(`${SERVER_URL}/todos/${todoId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ completado: nuevoEstado }),
      });
      if (response.ok) {
        const data = await response.json();
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id == todoId ? { ...todo, completado: data.completado } : todo
          )
        );
      }
    } catch (error) {
      console.error("Error en la solicitud PUT:", error);
    }
  };

  return {
    texto,
    setTexto,
    categoria,
    setCategoria,
    categorias,
    setCategorias,
    postData,
    deleteData,
    checkedTodo,
  };
}
