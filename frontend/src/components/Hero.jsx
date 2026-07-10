export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-20">
      {/* Animated Background Blobs / Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Badge */}

        {/* Main Heading */}
        <h1 className="text-2xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Optimize delivery routes with <br />
          <span className="text-2xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Artificial Bee Colony Optimization
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
          Generate optimized delivery routes that reduce travel distance and
          improve operational efficiency.{" "}
        </p>

        {/* Action Buttons */}
      </div>
    </section>
  );
}
