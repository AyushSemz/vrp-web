const COLORS = [
  "#3B82F6", // Blue
  "#22C55E", // Green
  "#F97316", // Orange
  "#A855F7", // Purple
  "#EF4444", // Red
  "#06B6D4", // Cyan
  "#EAB308", // Yellow
];

function RouteMap({ locations, routes }) {
  if (!locations || !routes) return null;

  const width = 900;
  const height = 650;
  const padding = 40;

  const maxX = Math.max(...locations.map((l) => l.x));
  const maxY = Math.max(...locations.map((l) => l.y));

  const scaleX = (x) => (x / maxX) * (width - padding * 2) + padding;

  const scaleY = (y) =>
    height - ((y / maxY) * (height - padding * 2) + padding);

  const getNode = (id) => locations.find((l) => l.id === id);

  return (
    <div className="bg-slate-900 rounded-2xl mt-12 p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">
        Route Visualization
      </h2>
      <div className="flex flex-wrap gap-4 mb-5">
        {routes.map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg"
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{
                backgroundColor: COLORS[index % COLORS.length],
              }}
            />
            <span className="text-slate-200 text-sm">Vehicle {index + 1}</span>
          </div>
        ))}
      </div>

      <svg
        width={width}
        height={height}
        className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-xl border border-slate-700"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />

            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Draw Routes */}

        {routes.map((route, index) => {
          const depot = getNode(0);

          const points = [depot, ...route.map(getNode), depot];

          return (
            <>
              <path
                key={index}
                d={
                  "M " +
                  points.map((p) => `${scaleX(p.x)} ${scaleY(p.y)}`).join(" L ")
                }
                fill="none"
                stroke={COLORS[index % COLORS.length]}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
                filter="url(#glow)"
                style={{
                  strokeDasharray: "12 8",
                  animation: "flow 1.2s linear infinite",
                }}
              />
              <circle r="6" fill={COLORS[index]}>
                <animateMotion
                  dur={`${8 + index}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  path={
                    "M " +
                    points
                      .map((p) => `${scaleX(p.x)} ${scaleY(p.y)}`)
                      .join(" L ")
                  }
                />
              </circle>
            </>
          );
        })}

        {/* Draw Nodes */}

        {locations.map((node) => (
          <g key={node.id}>
            <circle
              cx={scaleX(node.x)}
              cy={scaleY(node.y)}
              r={node.id === 0 ? 11 : 5}
              fill={node.id === 0 ? "#FFD700" : "#F8FAFC"}
              className="hover:r-7 transition-all duration-200 cursor-pointer"
            />

            <text
              x={scaleX(node.x) + 8}
              y={scaleY(node.y) - 8}
              fill="white"
              fontSize="12"
              fontWeight="600"
            >
              {node.id}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default RouteMap;
