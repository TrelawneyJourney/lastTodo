import ListItem from "./ListItem";
import Start from "./Start";
import { FaReply } from "react-icons/fa6";

export default function TodoPage({
  tareas,
  categoria,
  onDelete,
  onBack,
  onCheck,
  allCategorias,
}) {
  const categoriaData = allCategorias.find((cat) => cat.titulo === categoria);
  return (
    <div>
      <div className="m-4 flex flex-col">
        <div className="self-end ">
          <button
            onClick={onBack}
            className="flex gap-1 justify-center items-center text-sm text-purple-500 cursor-pointer hover:text-purple-400"
          >
            <FaReply /> volver
          </button>
        </div>

        {/**Contenido dinamico, muestro categoria de tareas*/}
        <div className="flex gap-2 mb-6 p-4 border-b border-purple-400">
          <div className="text-6xl">{categoriaData.emoji}</div>
          <div>
            <h2 className="text-gray-600 font-semibold text-2xl text-shadow-sm">
              {categoriaData.titulo}
            </h2>
            <p className="text-gray-400 text-sm"> {tareas.length} tareas</p>
          </div>
        </div>

        {/**renderizamos tareas */}
        {tareas.length === 0 ? (
          <div>
            <p className="text-gray-500 text-center">
              Todavía no hay tareas en esta categoría.
            </p>
            <Start />
          </div>
        ) : (
          <ul className="">
            {tareas?.map((todo) => (
              <ListItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onCheck={onCheck}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
