import SigeacV1 from "./SigeacV1";
import SigeacV2 from "./SigeacV2";


const NoSlideLoginPage = () => {

  return (
    <div className="h-4/5 w-4/5 bg-transparent relative overflow-hidden rounded-lg">
      <div
        id="signin"
        className={`group hover:bg-blue-100 absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20
          translate-x animate-show`}
      >
        <div className="h-full w-full bg-white flex justify-center items-center opacity-70 group-hover:opacity-100 transition-all duration-700 ease-in-out">
          <SigeacV1 />
        </div>
      </div>

      <div
        id="signup"
        className={`group hover:bg-blue-100 absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out
        translate-x-full z-50 animate-show`}
      >
        <div className="h-full w-full bg-white flex justify-center items-center opacity-70 group-hover:opacity-100 transition-all duration-700 ease-in-out">
          <SigeacV2 />
        </div>
      </div>
    </div>
  );
};

export default NoSlideLoginPage;
