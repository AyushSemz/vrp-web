export default function StatsCard({ title, value, icon }) {
  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] overflow-hidden">
      {/* Hidden glowing background blob that reveals on hover */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full pointer-events-none" />

      {/* Top gradient border accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Content */}
      <div className="relative z-10">
        {icon && (
          <div className="p-2.5 w-fit rounded-xl bg-slate-800/50 border border-slate-700/50 text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}

        <p className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
          {title}
        </p>

        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mt-2">
          {value}
        </h2>
      </div>
    </div>
  );
}
