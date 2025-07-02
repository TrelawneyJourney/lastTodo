import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";
import Start from "./Start";
import Button from "./Button";
import Modal from "./Modal";
import TodoPage from "./TodoPage";

import { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import useTodo from "../hooks/useTodo";
import ModalCategoria from "./ModalCategoria";
import useNuevaCat from "../hooks/useNuevaCat";
import useFetchCat from "../hooks/useFetchCat";
import { categories as categoriasFijas } from "../constant";

export default function MobileLayout() {
  const [showModal, setShowModal] = useState(false);
  const [showModalCat, setShowModalCat] = useState(false);
  const { data: todos, setData: setTodos, loading, error } = useFetchData();
  // const { titulo, emoji } = useNuevaCat({ setDataCat });
  const { dataCat, setDataCat } = useFetchCat();
  const catLogic = useNuevaCat({ dataCat, setDataCat });

  const [todoId, setTodoId] = useState(null);
  const [todoEditando, setTodoEditando] = useState(null);

  const todoLogic = useTodo({ todos, setTodos, todoId, setTodoId });

  //todas las categorias
  const todasLasCategorias = [...categoriasFijas, ...dataCat];

  const [selectedCategory, setSeletedCategory] = useState(null);

  if (loading) return <p>Cargando ...</p>;
  if (error) return <p> Error: {error.message}</p>;

  const tareasFiltradas =
    selectedCategory === "Todas"
      ? todos
      : todos.filter((todo) => todo.categoria === selectedCategory);

  const handleOnCloseModal = () => {
    setShowModal(false);
    setTodoEditando(null);
    setTodoId(null);
    todoLogic.resetForm();
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/** centra el "marco de cel" */}{" "}
      <div className="relative w-full h-full md:w-[375px] md:h-[812px] bg-white rounded-none md:rounded-[2rem] shadow-none md:shadow-xl md:shadow-purple-400 border-none md:border md:border-purple-400 overflow-hidden flex flex-col">
        <header className="shrink-0">
          <Header
            onSelectCategory={setSeletedCategory}
            onOpenModalCat={() => setShowModalCat(true)}
            allCategorias={todasLasCategorias}
          />
          <Hero />
        </header>

        {/**"flex-1 flex flex-col justify-center overflow-hidden h-[600px] py-2" */}
        <main className="flex-1 flex flex-col justify-center overflow-y-auto pt-2">
          {/** espacio que queda entre medio, contenido dinamico md:pt-[100px]*/}

          {selectedCategory === null ? (
            todos.length === 0 ? (
              <Start />
            ) : (
              <div className="mx-2 py-4 flex flex-col min-h-screen justify-start">
                <Card
                  todos={todos}
                  onSelectCategory={setSeletedCategory}
                  nuevaCat={dataCat}
                  allCategorias={todasLasCategorias}
                  onDeleteCat={catLogic.deleteCategoria}
                />
              </div>
            )
          ) : (
            <div className="mx-2 flex flex-col min-h-screen justify-start">
              <TodoPage
                tareas={tareasFiltradas}
                categoria={selectedCategory}
                onDelete={todoLogic.deleteData}
                onCheck={todoLogic.checkedTodo}
                onBack={() => setSeletedCategory(null)}
                allCategorias={todasLasCategorias}
                setTodoEditando={setTodoEditando}
                setShowModal={setShowModal}
                setTodoId={todoLogic.setTodoId}
              />
            </div>
          )}
        </main>

        {/** Boton Add */}
        {/* <Button onclick={() => setShowModal(true)} /> */}
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="add-boton"
        >
          Agregar
        </button>

        <footer className="shrink-0">
          <Footer />
        </footer>

        {/**Modales */}

        {showModal && (
          <Modal
            onclose={handleOnCloseModal}
            todoLogic={todoLogic}
            onOpenModalCat={() => setShowModalCat(true)}
            allCategorias={todasLasCategorias}
            mode={todoEditando ? "edit" : "create"}
            todoAEditar={todoEditando}
          />
        )}
        {showModalCat && (
          <ModalCategoria
            onClose={() => setShowModalCat(false)}
            catLogic={catLogic}
          />
        )}
      </div>
    </div>
  );
}
