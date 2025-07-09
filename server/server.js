const express = require("express");
const cors = require("cors");

const PORT = process.env.DBLT_PORT || 5000;
const app = express();
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ruta de prueba
app.get("/", (req, res) => {
  res.send("HELLOOOO");
});

//obtener-get todos toDos
app.get("/todos/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  console.log(req.params);
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [userEmail]
    );
    console.log(todos.rows);
    res.json(todos.rows);
  } catch (error) {
    console.error("Error en /todos", error);
    res.status(500).json({ error: "Error al obtener tareas" });
  }
});

//crear toDo
app.post("/todos", async (req, res) => {
  const { user_email, texto, categoria } = req.body;
  console.log(user_email, texto, categoria);
  try {
    const newTodo = await pool.query(
      `INSERT INTO todos (user_email, texto, categoria) VALUES  ($1,$2,$3) RETURNING *`,
      [user_email, texto, categoria]
    );
    // res.json(newTodo.rows[0]);
    // res.json(newTodo);
    res.status(200).json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

//eliminar todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await pool.query("DELETE FROM todos WHERE id = $1;", [
      id,
    ]);
    res.json(deleteTodo);
    if (deleteTodo.rowCount === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.status(200).json({ message: "Tarea eliminada" });
  } catch (error) {
    console.log(error);
  }
});

//todo completado
app.put("/todos/:id/completado", async (req, res) => {
  const { id } = req.params;
  const { completado } = req.body;
  try {
    const completedTodo = await pool.query(
      `UPDATE todos SET completado = $1 WHERE id = $2 RETURNING *`,
      [completado, id]
    );
    res.json(completedTodo.rows[0]);
  } catch (error) {
    console.error("Error al actualizar el estado de completado", error);
  }
});

//editar todo
app.put("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { user_email, texto } = req.body;
  try {
    const todoEdit = await pool.query(
      "UPDATE todos SET user_email = $1, texto = $2 WHERE id = $3 RETURNING *",
      [user_email, texto, todoId]
    );
    // res.json(todoEdit);

    res.status(200).json(todoEdit.rows[0]);
    console.log("Editando todo con ID:", todoId);
    console.log("Datos recibidos:", req.body);
    console.log("Resultado de UPDATE:", todoEdit.rowCount);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al editar todo" });
  }
});

//crear categoria
app.post("/nuevaCategorias", async (req, res) => {
  const { titulo, emoji, user_email } = req.body;
  try {
    const newCat = await pool.query(
      `INSERT INTO nuevaCategorias (titulo, emoji, user_email) VALUES ($1, $2, $3) RETURNING *`,
      [titulo, emoji, user_email]
    );
    res.status(200).json(newCat.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

//obtener categoria
app.get("/nuevaCategorias/:user_email", async (req, res) => {
  const { user_email } = req.params;
  try {
    const categoria = await pool.query(
      "SELECT * FROM nuevaCategorias WHERE user_email = $1",
      [user_email]
    );
    res.json(categoria.rows);
  } catch (error) {
    console.error("Error en /nuevaCategorias", error);
    res.status(500).json({ error: "Error al obtener la nueva categoria" });
  }
});

//eliminar categoria
app.delete("/nuevaCategorias/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCat = await pool.query(
      "DELETE FROM nuevaCategorias WHERE id = $1;",
      [id]
    );
    res.json(deleteCat);
    if (deleteCat.rowCount === 0) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    res.status(200).json({ message: "Categoría eliminada" });
  } catch (error) {
    console.log(error);
  }
});

//editar categoria
app.put("/nuevaCategorias/:idCat", async (req, res) => {
  const { idCat } = req.params;
  const { titulo, emoji, user_email } = req.body;
  try {
    const catEdit = await pool.query(
      "UPDATE nuevaCategorias SET titulo = $1, emoji = $2, user_email = $3 WHERE id = $4 RETURNING *",
      [titulo, emoji, user_email, idCat]
    );
    res.status(200).json(catEdit.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al eliminar la categoria." });
  }
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en la DB");
  }
});

//escuchar en el puerto
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
