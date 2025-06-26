import { FaPlus } from "react-icons/fa6";

export default function Button({ onclick }) {
  return (
    <button
      onClick={onclick}
      className="absolute bottom-20 right-4 bg-purple-600 text-white rounded-full p-4 shadow-lg shadow-purple-600 cursor-pointer"
    >
      <FaPlus className="text-3xl" />
    </button>
  );
}
