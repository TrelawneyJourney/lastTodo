import DropdownMenu from "./DropdownMenu";

export default function HamburguerMenu({
  menuRef,
  onSelectCategory,
  onCloseMenu,
  onNuevaCat,
  allCategorias,
}) {
  return (
    <aside
      ref={menuRef}
      className="absolute left-0 right-0 menu-hamburguer-position w-48 text-gray-500 bg-purple-100 inset-shadow-sm inset-shadow-purple-200 overflow-y-auto z-50 transition-all duration-300 ease-in-out animate-slide-down"
    >
      <div className="">
        <ul className="flex flex-col p-6">
          <li className="item-menu">Inicio</li>
          <li className="item-menu">Perfil</li>
          <DropdownMenu
            onSelectCategory={onSelectCategory}
            onCloseMenu={onCloseMenu}
            onNuevaCat={onNuevaCat}
            allCategorias={allCategorias}
          />
        </ul>
      </div>
    </aside>
  );
}
