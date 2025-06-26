import { IoClose } from "react-icons/io5";

export default function ModalCategoria({ onClose, catLogic }) {
  const listaEmojis = [
    "😎",
    "❤️",
    "🛀",
    "🎉",
    "🎁",
    "🛒",
    "💸",
    "📌",
    "🌭",
    "🦄",
    "🐱",
    "🐶",
    "👗",
    "💅",
  ];

  const handleSubmit = async (e) => {
    await catLogic.postNuevaCat(e);
    onClose();
  };

  return (
    <div className="absolute inset-0 flex justify-center items-end p-8 bg-purple-200/30 backdrop-blur-xs">
      <div className="relative bg-white rounded-2xl w-full max-w-sm p-4 shadow-lg shadow-purple-950">
        {/**boton de cierre */}
        <button
          className="absolute top-1.5 right-3.5 text-xl text-purple-500 hover:text-purple-900"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <IoClose />
        </button>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-gray-500 pl-1">
            Crea una nueva categoría:
          </label>
          <input
            type="text"
            value={catLogic.titulo}
            onChange={(e) => catLogic.setTitulo(e.target.value)}
            className="h-14 my-2 pl-4 rounded-2xl bg-purple-300 focus:outline-none focus:ring-1 focus:ring-purple-700"
            placeholder="Ingrese la nueva categoría aquí."
            required
          />

          <label htmlFor="" className="text-gray-500 py-2">
            Selecciona un emoji:
          </label>

          <div className="flex flex-wrap justify-center  mb-4 gap-2">
            {listaEmojis.map((emoji) => (
              <button
                type="button"
                key={emoji}
                onClick={() => catLogic.setEmoji(emoji)}
                className={`text-xl border border-gray-300 p-1  rounded-2xl cursor-pointer ${
                  catLogic.emoji === emoji
                    ? "bg-purple-200"
                    : "hover:bg-purple-100"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>

          <label htmlFor="" className="text-gray-500">
            O elige uno:{" "}
          </label>

          <input
            type="text"
            value={catLogic.emoji}
            onChange={(e) => catLogic.setEmoji(e.target.value)}
            maxLength={3}
            className="h-14 my-2 pl-4 rounded-2xl bg-purple-300 focus:outline-none focus:ring-1 focus:ring-purple-700"
            placeholder="Ingrese un emoji aquí."
          />

          <div className="flex justify-between my-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-purple-950 hover:bg-red-400 modal-boton "
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="modal-boton bg-purple-500 hover:bg-purple-400"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
