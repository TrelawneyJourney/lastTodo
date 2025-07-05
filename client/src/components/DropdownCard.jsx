import { useRef, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useClickOut } from "../hooks/useClickOut";

export default function DropdownCard({
  onCat,
  onSelectCategory,
  onCatTitulo,
  onOpenModalDelete,
  onOpenModalCatEdit,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropCardRef = useRef();

  //para cerrar haciendo click fuera
  useClickOut(dropCardRef, () => setIsOpen(false));

  //hace click sobre boton
  const toggleDropCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropCard}>
        <FaEllipsisVertical className="text-purple-950 text-lg cursor-pointer hover:text-purple-500" />
      </button>
      {isOpen && (
        <div className="absolute dropCard " ref={dropCardRef}>
          <ul className="">
            <li
              className="item-dropCard"
              onClick={() => onSelectCategory(onCatTitulo)}
            >
              Abrir
            </li>
            <li
              className="item-dropCard"
              onClick={() => onOpenModalCatEdit(onCat)}
            >
              Editar
            </li>

            <li
              className="item-dropCard"
              onClick={() => onOpenModalDelete(onCat)}
            >
              Eliminar
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
