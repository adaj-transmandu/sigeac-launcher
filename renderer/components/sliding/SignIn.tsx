import { useState } from "react";
import Logo from "../logo";
import { Button } from "../ui/button";
import LogoOld from "../logo-old";

const SigninForm = () => {

  const openApp = () => {
    console.log('abriendo')
    window.ipc.openApp('C:\\AVPRO_SOURCE\\dssavpro.exe')
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white border-r-2 border-r-blue-300">
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

export default SigninForm;
