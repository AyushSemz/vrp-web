import { useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DatasetSelector from "../components/DatasetSelector";
import OptimizeButton from "../components/OptimizeButton";
import StatsCard from "../components/StatsCard";
import RouteCard from "../components/RouteCard";

function Home() {
  const [dataset, setDataset] = useState("B/B-n35-k5.vrp");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const optimize = async () => {
    setLoading(true);

    try {
      const response = await API.post("/optimize", {
        dataset,
      });

      setResult(response.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <Hero />

      <div className="flex flex-col items-center">
        <DatasetSelector dataset={dataset} setDataset={setDataset} />

        <OptimizeButton optimize={optimize} loading={loading} />
      </div>

      {result && (
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-4 gap-6">
          <StatsCard title="Distance" value={`${result.distance} km`} />

          <StatsCard title="Vehicles" value={result.vehicles} />

          <StatsCard title="Runtime" value={`${result.execution_time}s`} />

          <StatsCard title="Iterations" value={result.iterations} />
        </div>
      )}
      {result && (
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Vehicle Routes</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {result.routes.map((route, index) => (
              <RouteCard key={index} index={index} route={route} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
