import { FaHouse } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
import { FaRightFromBracket } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="mt-auto h-10 px-4 py-3 bg-white border-t border-purple-300 flex justify-around text-purple-950">
      <button>
        <FaHouse />
      </button>
      <button>
        <FaHeart />
      </button>
      <button>
        <FaRegCalendar />
      </button>
      <button>
        <FaRightFromBracket />
      </button>
    </div>
  );
}
