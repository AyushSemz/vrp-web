function OptimizeButton({ optimize, loading }) {
  return (
    <button
      onClick={optimize}
      className="
      mt-8
      bg-blue-600
      hover:bg-blue-500
      transition
      text-white
      px-10
      py-4
      rounded-xl
      font-semibold
      shadow-lg
      shadow-blue-600/20
      "
    >
      {loading ? "Optimizing..." : " Optimize Route"}
    </button>
  );
}

export default OptimizeButton;
