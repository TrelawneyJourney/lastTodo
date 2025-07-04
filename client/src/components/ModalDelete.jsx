import { IoClose } from "react-icons/io5";

export default function ModalDelete({
  onCloseDelete,
  onDelete,
  tipoAEliminar,
}) {
  return (
    <div className="absolute inset-0 flex justify-center items-center p-8 bg-purple-100/80">
      <div className="relative bg-white rounded-2xl w-full max-w-sm p-6 shadow-lg shadow-purple-950 ">
        <button
          className="absolute top-1.5 right-3.5 text-xl text-purple-500 hover:text-purple-900 p-1"
          onClick={onCloseDelete}
          aria-label="Cerrar modal"
        >
          <IoClose />
        </button>
        <div className="flex flex-col justify-center items-center mt-2">
          <p className="font-bold text-gray-600 text-base">
            ¿Confirmás eliminar{" "}
            {tipoAEliminar === "todo" ? "la tarea" : "la categoría"}?
          </p>
          <p className="text-gray-400 text-sm">
            Esta acción no se puede deshacer.
          </p>
          <div className="flex gap-3 m-3.5">
            <button
              onClick={onDelete}
              className="modal-boton-delete bg-purple-950 hover:bg-red-400"
            >
              Eliminar
            </button>
            <button
              onClick={onCloseDelete}
              className="modal-boton-delete bg-purple-400 hover:bg-purple-500"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
