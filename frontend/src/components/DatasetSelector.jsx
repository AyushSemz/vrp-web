export default function DatasetSelector({ dataset, setDataset }) {
  return (
    <div className="mt-8 flex flex-col gap-2 max-w-xs relative group z-20">
      <label className="text-sm font-semibold tracking-wider text-slate-400 uppercase ml-1">
        Benchmark Dataset
      </label>

      <div className="relative">
        {/* The Glow Effect behind the select */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur transition-opacity duration-500 rounded-xl pointer-events-none" />

        <select
          value={dataset}
          onChange={(e) => setDataset(e.target.value)}
          className="
            relative
            w-full
            appearance-none
            bg-slate-900/60
            backdrop-blur-md
            border border-slate-700/80
            rounded-xl
            px-5 py-3.5
            text-white
            font-medium
            shadow-sm
            transition-all duration-300
            focus:outline-none
            focus:border-blue-500/80
            focus:ring-4 focus:ring-blue-500/20
            hover:border-blue-500/50
            hover:bg-slate-800/60
            cursor-pointer
          "
        >
          {/* Group A */}
          <optgroup
            label="Set A (Capacitated VRP)"
            className="bg-slate-900 text-slate-300 font-semibold"
          >
            <option value="A/A-n32-k5.vrp">A-n32-k5</option>
            <option value="A/A-n33-k5.vrp">A-n33-k5</option>
            <option value="A/A-n36-k5.vrp">A-n36-k5</option>
            <option value="A/A-n37-k5.vrp">A-n37-k5</option>
            <option value="A/A-n38-k5.vrp">A-n38-k5</option>
            <option value="A/A-n39-k5.vrp">A-n39-k5</option>
            <option value="A/A-n44-k6.vrp">A-n44-k6</option>
            <option value="A/A-n45-k6.vrp">A-n45-k6</option>
            <option value="A/A-n46-k7.vrp">A-n46-k7</option>
            <option value="A/A-n53-k7.vrp">A-n53-k7</option>
            <option value="A/A-n54-k7.vrp">A-n54-k7</option>
            <option value="A/A-n55-k9.vrp">A-n55-k9</option>
            <option value="A/A-n60-k9.vrp">A-n60-k9</option>
            <option value="A/A-n61-k9.vrp">A-n61-k9</option>
            <option value="A/A-n62-k8.vrp">A-n62-k8</option>
            <option value="A/A-n63-k10.vrp">A-n63-k10</option>
            <option value="A/A-n64-k9.vrp">A-n64-k9</option>
            <option value="A/A-n69-k9.vrp">A-n69-k9</option>
            <option value="A/A-n80-k10.vrp">A-n80-k10</option>
          </optgroup>

          {/* Group B */}
          <optgroup
            label="Set B (Clustered VRP)"
            className="bg-slate-900 text-slate-300 font-semibold"
          >
            <option value="B/B-n31-k5.vrp">B-n31-k5</option>
            <option value="B/B-n34-k5.vrp">B-n34-k5</option>
            <option value="B/B-n35-k5.vrp">B-n35-k5</option>
            <option value="B/B-n38-k6.vrp">B-n38-k6</option>
            <option value="B/B-n39-k5.vrp">B-n39-k5</option>
            <option value="B/B-n41-k6.vrp">B-n41-k6</option>
            <option value="B/B-n43-k6.vrp">B-n43-k6</option>
            <option value="B/B-n44-k7.vrp">B-n44-k7</option>
            <option value="B/B-n45-k5.vrp">B-n45-k5</option>
            <option value="B/B-n45-k6.vrp">B-n45-k6</option>
            <option value="B/B-n50-k7.vrp">B-n50-k7</option>
            <option value="B/B-n50-k8.vrp">B-n50-k8</option>
            <option value="B/B-n51-k7.vrp">B-n51-k7</option>
          </optgroup>
        </select>

        {/* Custom Animated Arrow */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-blue-400 transition-colors duration-300">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
