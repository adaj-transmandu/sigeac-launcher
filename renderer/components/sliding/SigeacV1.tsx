import LogoOld from "../logo-old";
import { Button } from "../ui/button";

const SigeacV1 = () => {

  const openApp = () => {
    window.ipc.openApp('C:\\SIGEAC\\sigeac_v10.exe')
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white border-r-2 border-r-blue-300 mb-[20px]">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8 flex flex-col justify-center items-center gap-4 mb-[47px]">
              <LogoOld />
              <h1 className="text-3xl font-bold text-indigo-600 text-center">
                v1.0
              </h1>
              <Button onClick={openApp} variant="default" className="hover:bg-indigo-500 hover:text-white">Ingresar a la v1.0</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigeacV1;
