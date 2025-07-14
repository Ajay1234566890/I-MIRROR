import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate("/intro");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mobile-container bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] h-screen">
      <div className="flex flex-col items-center justify-center h-full animate-fadeIn">
        {/* Logo */}
        <div className="relative w-[95px] h-[101px] mb-8">
          <div className="absolute top-1.5 left-0 bg-[#9783d305] border-[#74a4ee] w-[50px] h-20 rounded-[10px] border-[5px] border-solid" />
          <div className="absolute top-[21px] left-[25px] border-[#9783d3] w-[50px] h-20 rounded-[10px] border-[5px] border-solid" />
          <img
            className="absolute w-[26px] h-[26px] top-0 left-[69px]"
            alt="Star"
            src="https://c.animaapp.com/mcx4tn3jwyabUV/img/star-5.svg"
          />
        </div>

        {/* App Name and Tagline */}
        <div className="flex flex-col items-center">
          <h1 className="font-normal text-black text-[92px] leading-tight">
            I Mirror
          </h1>
          <p className="font-medium italic text-black text-base mt-1">
            Know yourself from who knows you best!
          </p>
        </div>
      </div>
    </div>
  );
};
