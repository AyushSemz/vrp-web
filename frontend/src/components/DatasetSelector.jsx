function DatasetSelector({ dataset, setDataset }) {
  return (
    <div className="mt-8">
      <label className="block text-slate-300 mb-2 font-medium">
        Benchmark Dataset
      </label>

      <select
        value={dataset}
        onChange={(e) => setDataset(e.target.value)}
        className="
          w-72
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          text-white
          focus:outline-none
          focus:border-blue-500
          transition
        "
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
      </select>
    </div>
  );
}

export default DatasetSelector;
