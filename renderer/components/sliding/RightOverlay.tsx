const RightOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">
        ¿Necesitas ir a la versión actual?
      </h1>

      <h5 className="text-xl text-white">¡Prueba la versión 2.0 de <span className="text-xl font-bold">SIGEAC</span>!</h5>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent rounded-full text-center text-white font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in hover:bg-blue-700"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Ir a la v2.0
        </button>
      </div>
    </div>
  );
};

export default RightOverlayContent;
