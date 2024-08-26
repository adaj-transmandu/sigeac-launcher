
import { useState } from "react";
import Logo from "../logo";
import { Button } from "../ui/button";

const SigeacV2 = () => {
  const onUrlOpen = () => {
    window.ipc.openUrl("http://localhost:3000")
  }
  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8 flex flex-col justify-center items-center gap-4">
              <Logo />
              <h1 className="text-3xl font-bold text-indigo-600 text-center">
                v2.0
              </h1>
              <Button onClick={onUrlOpen} variant="default" className="hover:bg-indigo-500 hover:text-white">Ingresar a la v2.0</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigeacV2;
