import { useEffect } from "react";

export function useClickOut(ref, callback) {
  useEffect(() => {
    function handleClickOut(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOut);
    return () => document.removeEventListener("mousedown", handleClickOut);
  }, [ref, callback]);
}
