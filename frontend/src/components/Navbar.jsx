export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="group cursor-pointer">
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-sm">
            RouteWise
          </h1>
          <p className="text-xs font-semibold text-slate-400/80 tracking-widest mt-1 uppercase">
            Vehicle Routing Optimization
          </p>
        </div>

        {/* Links Section */}
        <div className="flex gap-8 text-sm font-medium text-slate-300">
          {["Home", "About", "GitHub"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative py-2 hover:text-white transition-colors duration-300
                         after:absolute after:bottom-0 after:left-0 after:h-[2px]
                         after:w-0 after:bg-blue-400 after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
