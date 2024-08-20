const LeftOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">
        ¿Necesitas la versión antigua?
      </h1>

      <h5 className="text-xl text-white">¡Ingresa a la versión 1.0 de <span className="text-xl font-bold">SIGEAC</span>!</h5>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Ir a la v1.0
        </button>
      </div>
    </div>
  );
};

export default LeftOverlayContent;
