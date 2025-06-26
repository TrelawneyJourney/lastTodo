export default function Hero() {
  return (
    <div className="flex items-center justify-between p-4 bg-purple-300">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 mr-2 rounded-full bg-amber-100 flex justify-center items-center text-lg">
          👩🏽
        </div>
        <p className="text-gray-600">
          Hola <span className="font-semibold">Anto</span>
        </p>
      </div>
    </div>
  );
}
