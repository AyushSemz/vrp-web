function RouteCard({ index, route }) {
  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
      hover:border-blue-500
      hover:-translate-y-1
      transition-all
      duration-300
      shadow-lg
      "
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">🚚 Vehicle {index + 1}</h2>

        <span className="text-blue-400 font-semibold">
          {route.length} Stops
        </span>
      </div>

      <div className="mt-5 text-slate-300 leading-8 break-words">
        {route.join(" → ")}
      </div>

      <div className="mt-5 border-t border-slate-800 pt-4 text-sm text-slate-500">
        Depot → {route.join(" → ")} → Depot
      </div>
    </div>
  );
}

export default RouteCard;
