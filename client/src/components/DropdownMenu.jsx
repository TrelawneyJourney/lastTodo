import { useRef, useState } from "react";
import { useClickOut } from "../hooks/useClickOut";
// import { categories } from "../constant";

export default function DropdownMenu({
  onSelectCategory,
  onCloseMenu,
  onNuevaCat,
  allCategorias,
}) {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const dropdownRef = useRef(null);

  //pa que cierre
  useClickOut(dropdownRef, () => setIsOpenDrop(false));

  const toggleDropMenu = () => {
    setIsOpenDrop((prev) => !prev);
  };

  const handleClickCat = (title) => {
    onSelectCategory(title);
    setIsOpenDrop(false);
    onCloseMenu();
  };
  const nuevaCat = () => {
    onNuevaCat();
    onCloseMenu();
  };
  // const [showModalCat, setShowModalCat] = useState(false);

  return (
    <div className="relative">
      {/* <button onClick={() => setIsOpenDrop(!isOpenDrop)}>Categorías</button> */}
      <button onClick={toggleDropMenu} className="item-menu">
        Categorías
      </button>
      {isOpenDrop && (
        <div className="absolute">
          <ul>
            {allCategorias.map((cat) => (
              <li
                key={cat.id}
                className="item-menu-cat"
                onClick={() => handleClickCat(cat.titulo)}
              >
                {cat.titulo}
              </li>
            ))}
            <li className="item-menu-cat font-semibold" onClick={nuevaCat}>
              + Crea nueva
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
