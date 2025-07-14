import {
  BellIcon,
  ChevronLeftIcon,
  HomeIcon,
  MessageSquareIcon,
  PlusIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const WhomToSend = (): JSX.Element => {
  const navigate = useNavigate();
  
  // Template category data for the grid
  const templateCategories = [
    {
      name: "Self",
      icon: "https://c.animaapp.com/mcys8cnl5IAzAv/img/mdi-user.svg",
    },
    {
      name: "Family",
      icon: "https://c.animaapp.com/mcys8cnl5IAzAv/img/group.png",
    },
    {
      name: "Kids",
      icon: "https://c.animaapp.com/mcys8cnl5IAzAv/img/group-3.png",
    },
    {
      name: "Friends",
      icon: "https://c.animaapp.com/mcys8cnl5IAzAv/img/mdi-user.svg", // Using placeholder
    },
    {
      name: "Teachers",
      icon: "https://c.animaapp.com/mcys8cnl5IAzAv/img/group-5.png",
    },
    {
      name: "Collegues",
      icon: "https://c.animaapp.com/mcys8cnl5IAzAv/img/emojione-briefcase.svg",
    },
    {
      name: "Network",
      icon: "https://c.animaapp.com/mcys8cnl5IAzAv/img/octicon-broadcast-16.svg",
    },
    {
      name: "Besties",
      icon: "https://c.animaapp.com/mcys8cnl5IAzAv/img/noto-people-hugging.svg",
    },
    {
      name: "Social",
      icon: "https://c.animaapp.com/mcys8cnl5IAzAv/img/noto-globe-showing-americas.svg",
    },
  ];

  const handleBackClick = () => {
    navigate('/request-feedback');
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <div className="relative w-full max-w-[390px] h-[844px] overflow-hidden bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)]">
        {/* Status Bar */}
        <div className="absolute w-full h-11 top-0 left-0 bg-skywhite flex justify-between items-center px-[30px]">
          <div className="font-regular-none-medium text-inkdarkest">9:41</div>
          <div className="flex items-center gap-2">
            <div className="w-[18px] h-2.5 bg-[url(https://c.animaapp.com/mcys8cnl5IAzAv/img/mobile-signal.svg)] bg-[100%_100%]" />
            <div className="w-[15px] h-[11px] bg-[url(https://c.animaapp.com/mcys8cnl5IAzAv/img/union.svg)] bg-[100%_100%]" />
            <div className="w-[27px] h-[13px] bg-[url(https://c.animaapp.com/mcys8cnl5IAzAv/img/battery.png)] bg-[100%_100%]" />
          </div>
        </div>

        {/* Header */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[63px] left-[10px] p-0"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon className="h-6 w-6 text-inkdarkest" />
        </Button>

        <h1 className="absolute w-[327px] top-[63px] left-[34px] font-title-3 font-bold text-inkdarkest text-[24px] text-center leading-[32px]">
          Request Feedback
        </h1>

        {/* Main Card */}
        <Card className="absolute w-[359px] h-[647px] top-[116px] left-[16px] rounded-[40px] shadow-[0px_0px_35.3px_#00000017] overflow-hidden border-none">
          <div className="w-full h-[77px] bg-white rounded-t-[40px] shadow-[0px_0px_35.3px_#00000017] flex items-center justify-center">
            <div className="text-primarybase font-medium text-base">
              Choose a Template
            </div>
          </div>

          <CardContent className="p-6 grid grid-cols-3 gap-4">
            {templateCategories.map((category, index) => (
              <Card
                key={index}
                className="h-[139px] bg-[#ebedff] rounded-[20px] border-none flex flex-col items-center justify-center cursor-pointer hover:bg-[#dde1ff] transition-colors"
              >
                <CardContent className="flex flex-col items-center justify-center p-0 h-full">
                  <div className="flex items-center justify-center h-[70px]">
                    <img
                      className="w-[38px] h-[38px]"
                      alt={`${category.name} icon`}
                      src={category.icon}
                    />
                  </div>
                  <div className="font-regular-normal-regular text-inkdarkest text-center">
                    {category.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Bottom Navigation */}
        <div className="absolute w-full h-[79px] bottom-0 left-0 flex items-end">
          <div className="relative w-full h-[79px]">
            <div className="absolute w-full h-[45px] bottom-0 left-0 bg-white flex justify-around items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-[45px]"
                onClick={() => navigate('/dashboard')}
              >
                <HomeIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-[45px]">
                <MessageSquareIcon className="h-5 w-5" />
              </Button>
              <div className="w-[49px] h-[49px]"></div> {/* Placeholder for floating button */}
              <Button variant="ghost" size="icon" className="h-[45px]">
                <BellIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-[45px]">
                <UserIcon className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute w-[49px] h-[49px] top-0 left-1/2 -translate-x-1/2 bg-new-fill-f1e4f4 rounded-full shadow-[3.82px_7.64px_7.64px_#24265f40,-1.91px_-1.91px_7.64px_#24265f40] flex items-center justify-center">
              <PlusIcon className="h-[34px] w-[34px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
