import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const ListItem = ({ todo, onCheck, onOpenModalEdit, onOpenModalDelete }) => {
  return (
    <li className="flex justify-between rounded-xl shadow-sm shadow-gray-300 p-2 my-2.5 hover:shadow-gray-400 hover:z-40">
      <div className="flex items-center gap-2">
        {/* <FaCircleCheck className="icons" /> */}
        {todo.completado ? (
          <FaCircleCheck className="icons" onClick={() => onCheck(todo.id)} />
        ) : (
          <FaRegCircle className="icons" onClick={() => onCheck(todo.id)} />
        )}
        <div className="flex">
          <p
            className={`text-gray-600 ${
              todo.completado ? "line-through text-gray-200" : ""
            }`}
          >
            {todo.texto}
          </p>
        </div>
      </div>
      <div className="flex gap-1.5">
        {/**passo el todo a editar */}
        <FaRegEdit className="icons" onClick={() => onOpenModalEdit(todo)} />
        {/* <AiOutlineDelete className="icons" onClick={() => onDelete(todo.id)} /> */}
        <AiOutlineDelete
          className="icons"
          onClick={() => onOpenModalDelete(todo)}
        />
      </div>
    </li>
  );
};

export default ListItem;
