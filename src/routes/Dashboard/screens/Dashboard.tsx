import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../components/ui/card";

export const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] w-[390px] h-[844px] relative">
        {/* Status bar */}
        <div className="absolute w-[390px] h-11 top-0 left-0 bg-skywhite">
          <div className="left-[30px] text-inkdarkest absolute h-4 top-[15px] font-regular-none-medium font-[number:var(--regular-none-medium-font-weight)] text-[length:var(--regular-none-medium-font-size)] tracking-[var(--regular-none-medium-letter-spacing)] leading-[var(--regular-none-medium-line-height)] whitespace-nowrap [font-style:var(--regular-none-medium-font-style)]">
            9:41
          </div>
          <div className="absolute w-[18px] h-2.5 top-5 left-[303px] bg-[url(https://c.animaapp.com/mcx8of52P3cLSw/img/mobile-signal.svg)] bg-[100%_100%]" />
          <div className="absolute w-[15px] h-[11px] top-[19px] left-[326px] bg-[url(https://c.animaapp.com/mcx8of52P3cLSw/img/union.svg)] bg-[100%_100%]" />
          <div className="absolute w-[27px] h-[13px] top-[18px] left-[347px] bg-[url(https://c.animaapp.com/mcx8of52P3cLSw/img/battery.png)] bg-[100%_100%]" />
        </div>

        {/* Header */}
        <div className="absolute w-full top-[69px] left-0 px-4">
          <h1 className="font-title-3 font-[number:var(--title-3-font-weight)] text-inkdarkest text-[length:var(--title-3-font-size)] text-center tracking-[var(--title-3-letter-spacing)] leading-[var(--title-3-line-height)] [font-style:var(--title-3-font-style)]">
            Dashboard
          </h1>
        </div>

        {/* Main content */}
        <div className="absolute w-full top-[129px] left-0 px-4 flex flex-col items-center">
          <Card className="w-full max-w-[359px] rounded-[40px] border border-solid border-[#e9eefd] shadow-[0px_0px_35.3px_#00000017] mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-inkdarkest">Welcome to iMirror!</h2>
              <p className="text-inkdarkest">
                Your profile has been set up successfully. You can now start using the app to receive feedback and connect with coaches.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full max-w-[359px] rounded-[40px] border border-solid border-[#e9eefd] shadow-[0px_0px_35.3px_#00000017]">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-inkdarkest">Get Started</h2>
              <ul className="list-disc pl-5 space-y-2 text-inkdarkest">
                <li>Request anonymous feedback from friends</li>
                <li>Connect with professional coaches</li>
                <li>Track your personal growth journey</li>
                <li>Set goals and monitor your progress</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Navigation bar */}
        <div className="absolute w-full bottom-0 left-0 h-[80px] bg-white rounded-t-[30px] shadow-[0px_-4px_10px_rgba(0,0,0,0.05)] flex justify-around items-center">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-[#74a4ee] rounded-full mb-1"></div>
            <span className="text-xs text-inkdarkest font-medium">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-[#e1e1e1] rounded-full mb-1"></div>
            <span className="text-xs text-inklighter">Feedback</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-[#e1e1e1] rounded-full mb-1"></div>
            <span className="text-xs text-inklighter">Coaches</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-[#e1e1e1] rounded-full mb-1"></div>
            <span className="text-xs text-inklighter">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};
