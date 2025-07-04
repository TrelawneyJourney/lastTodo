import { FaEllipsisVertical } from "react-icons/fa6";
import { categories } from "../constant";
import DropdownCard from "./DropdownCard";

export default function Card({
  todos,
  onSelectCategory,
  allCategorias,
  setShowModalDelete,
  setIdAEliminar,
  setTipoAEliminar,
}) {
  const catDinamicas = [...new Set(todos.map((todo) => todo.categoria))]; // filtra q no se repita el nombre de la categoria.
  const catPredefinida = categories.map((c) => c.title);
  const nuevaCategoria = catDinamicas.filter(
    (cat) => !catPredefinida.includes(cat)
  );

  const handleOpenModalDelete = (cate) => {
    setIdAEliminar(cate);
    setTipoAEliminar("categoria");
    setShowModalDelete(true);
  };

  return (
    <div>
      {allCategorias.map((c) => (
        <div key={c.id} className="card">
          <div
            onClick={() => onSelectCategory(c.titulo)}
            className="flex items-center cursor-pointer"
          >
            <div className="text-5xl mr-2">{c.emoji}</div>
            <div>
              <p className="text-gray-600 font-semibold text-xl">{c.titulo}</p>
              <p className="text-gray-400 text-sm">
                {c.titulo === "Todas"
                  ? todos.length
                  : todos.filter((todo) => todo.categoria === c.titulo)
                      .length}{" "}
                Tasks
              </p>
            </div>
          </div>
          <DropdownCard
            onCat={c.id}
            onSelectCategory={onSelectCategory}
            onCatTitulo={c.titulo}
            onOpenModalDelete={handleOpenModalDelete}
          />
          {/* <FaEllipsisVertical
            className="text-purple-950 text-lg cursor-pointer hover:text-purple-500"
            onClick={() => onDeleteCat(c.id)}
          /> */}
        </div>
      ))}

      {/* {nuevaCat &&
        nuevaCat
          .filter((cat) => !catPredefinida.includes(cat.title))
          .map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.title)}
              className="card"
            >
              <div className="flex items-center">
                <div className="text-5xl mr-2">{cat.icon}</div>
                <div>
                  <p className="text-gray-600 font-semibold text-xl">
                    {cat.title}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {
                      todos.filter((todo) => todo.categoria === cat.title)
                        .length
                    }{" "}
                    Tasks
                  </p>
                </div>
              </div>
              <FaEllipsisVertical className="text-purple-950 text-lg" />
            </div>
          ))} */}
    </div>
  );
}
