import ModalCategoria from "./ModalCategoria";

export default function SelectCategorias({
  categoria,
  setCategoria,
  categorias,
  onNuevaCat,
}) {
  const handleCategoria = (e) => {
    const value = e.target.value;
    if (value === "nueva") {
      onNuevaCat?.();
    } else {
      setCategoria(value);
    }
  };
  //onChange={(e) => setCategoria(e.target.value)}

  return (
    <>
      <select
        value={categoria}
        onChange={handleCategoria}
        className="border-b-1 border-purple-400 text-gray-600 focus:outline-purple-400"
      >
        <option value="ninguna">Ninguna Categoria</option>

        {categorias.map((cat) => (
          <option key={cat.id} value={cat.title}>
            {cat.title} {cat.titulo}
          </option>
        ))}

        <option value="nueva" className="text-purple-950 font-semibold">
          + Crea nueva
        </option>
      </select>
    </>
  );
}
