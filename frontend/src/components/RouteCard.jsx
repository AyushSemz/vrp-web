export default function RouteCard({ index, route }) {
  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] overflow-hidden">
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 shadow-inner">
            🚚
          </div>
          <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
            Vehicle {index + 1}
          </h2>
        </div>

        {/* Stops Pill */}
        <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide">
          {route.length} Stops
        </div>
      </div>

      {/* Visualized Route Path */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {/* Start Depot */}
        <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 uppercase tracking-wider">
          Depot
        </div>

        {route.map((stop, i) => (
          <div key={i} className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>

            {/* Route Node */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 text-sm font-semibold border border-slate-700 group-hover:border-blue-500/40 group-hover:text-blue-200 group-hover:bg-blue-900/20 transition-all duration-300 shadow-sm">
              {stop}
            </div>
          </div>
        ))}

        {/* End Depot */}
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 uppercase tracking-wider">
            Depot
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500 tracking-wide uppercase">
          Sequence Breakdown
        </span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Optimized
        </span>
      </div>
    </div>
  );
}
