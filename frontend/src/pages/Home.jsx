import { useState } from "react";
import API from "../services/api";

function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const optimize = async () => {
    setLoading(true);

    try {
      const response = await API.post("/optimize", {
        dataset: "B/B-n35-k5.vrp",
      });

      setResult(response.data);
    } catch (err) {
      console.error(err);
      alert("Backend not running!");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>🚚 Vehicle Routing Optimizer</h1>

      <button onClick={optimize}>
        {loading ? "Optimizing..." : "Optimize Route"}
      </button>

      {result && (
        <>
          <h2>Distance</h2>

          <h3>{result.distance.toFixed(2)} km</h3>

          <h2>Routes</h2>

          {result.routes.map((route, index) => (
            <div key={index}>
              <strong>Vehicle {index + 1}</strong>

              <p>{route.join(" → ")}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Home;
