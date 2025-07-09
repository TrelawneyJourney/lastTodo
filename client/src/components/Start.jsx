import inicioSvg from "../assets/inicio.svg";

export default function Start() {
  return (
    <div className="w-full">
      <img src={inicioSvg} alt="" className="opacity-70" />
      {/* <img src="./src/assets/inicio.svg" alt="" className="opacity-70" /> */}
    </div>
  );
}
