import { useRef, useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import HamburguerMenu from "./HamburguerMenu";
import { useClickOut } from "../hooks/useClickOut";

export default function Header({
  onSelectCategory,
  onOpenModalCat,
  allCategorias,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  useClickOut(menuRef, () => setShowMenu(false));
  //para cerrar con un click
  // useEffect(() => {
  //   const handleClickOut = (e) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target)) {
  //       setShowMenu(false);
  //     }
  //   };
  //   if (showMenu) {
  //     document.addEventListener("mousedown", handleClickOut);
  //   }
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOut);
  //   };
  // }, [showMenu]);

  return (
    <div className="">
      <div className="flex items-center justify-between p-6 bg-purple-200 h-16">
        <button onClick={toggleMenu} className="flex items-center gap-2">
          <FaAlignJustify className="text-purple-950 text-lg" />
        </button>
        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
          🔔
        </div>
      </div>

      {showMenu && (
        <HamburguerMenu
          menuRef={menuRef}
          onSelectCategory={onSelectCategory}
          onCloseMenu={() => setShowMenu(false)}
          onNuevaCat={onOpenModalCat}
          allCategorias={allCategorias}
        />
      )}
    </div>
  );
}
