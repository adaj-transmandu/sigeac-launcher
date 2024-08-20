import { useState } from "react";
import SigninForm from "./SignIn";
import SignupForm from "./SignUp";
import LeftOverlayContent from "./LeftOverlay";
import RightOverlayContent from "./RightOverlay";


const NoSlideLoginPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const overlayBg =
    "bg-gradient-to-r from-blue-800 via-violet-600 to-blue-500";

  return (
    <div className="h-4/5 w-4/5 bg-white relative overflow-hidden rounded-lg">
      <div
        id="signin"
        className={`group hover:bg-blue-100 absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20
          translate-x animate-show`}
      >
        <div className="h-full w-full flex justify-center items-center opacity-50 group-hover:opacity-100 transition-all duration-700 ease-in-out">
          <SigninForm />
        </div>
      </div>

      <div
        id="signup"
        className={`group hover:bg-blue-100 absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out isAnimated
           translate-x-full opacity-100 z-50 animate-show
          `}
      >
        <div className="h-full w-full flex justify-center items-center opacity-50 group-hover:opacity-100 transition-all duration-700 ease-in-out">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default NoSlideLoginPage;
