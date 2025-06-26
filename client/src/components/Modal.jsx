import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import SelectCategorias from "./SelectCategorias";

export default function Modal({
  onclose,
  todoLogic,
  onOpenModalCat,
  allCategorias,
}) {
  {
    /**transform transition-all duration-300 opacity-100 translate-x-4 ease-in-out */
  }
  return (
    <div className="absolute inset-0 flex justify-center items-end p-8 bg-purple-400/80 backdrop-blur-xs">
      <div className="relative bg-white rounded-2xl w-full max-w-sm p-4 shadow-lg shadow-purple-950 ">
        {/**boton de cierre */}
        <button
          className="absolute top-1.5 right-3.5 text-xl text-purple-500 hover:text-purple-900"
          onClick={onclose}
          aria-label="Cerrar modal"
        >
          <IoClose />
        </button>

        <form className="flex flex-col" onSubmit={todoLogic.postData}>
          <input
            type="text"
            value={todoLogic.texto}
            onChange={(e) => todoLogic.setTexto(e.target.value)}
            className="h-14 mt-3 mb-2 pl-4 rounded-2xl bg-purple-300 focus:outline-none focus:ring-1 focus:ring-purple-700"
            placeholder="Ingrese nueva tarea aquí"
            required
          />

          <div className="flex justify-between mb-4 px-4">
            <SelectCategorias
              categoria={todoLogic.categoria}
              setCategoria={todoLogic.setCategoria}
              categorias={allCategorias}
              onNuevaCat={onOpenModalCat}
            />

            <button className="bg-purple-500 text-white rounded-full p-2 shadow-md shadow-purple-600 cursor-pointer">
              <IoIosSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
