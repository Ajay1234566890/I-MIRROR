import { BellIcon, HomeIcon, MessageSquareIcon, PlusIcon, UserIcon, BookOpenTextIcon, SendIcon, CalendarCheckIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFabExpanded, setIsFabExpanded] = useState(false);

  const toggleFab = () => {
    setIsFabExpanded(!isFabExpanded);
  };

  const handleFabOptionClick = (path: string) => {
    navigate(path);
    setIsFabExpanded(false);
  };

  return (
    <footer className="w-full h-[79px] relative z-10">
      {/* Background shape for the footer */}
      <div className="absolute bottom-0 left-0 w-full h-[45px] bg-white rounded-t-[30px] shadow-[0px_-4px_10px_rgba(0,0,0,0.05)] frosted-glass"></div>

      {/* Navigation icons */}
      <div className="absolute bottom-[11px] left-0 w-full flex justify-around items-center px-5">
        <Button
          variant="ghost"
          size="icon"
          className={`h-10 w-10 p-0 transition-colors duration-200 ${
            location.pathname === '/dashboard' ? 'text-[#74a4ee]' : 'text-gray-500 hover:bg-[#f0f7ff]'
          }`}
          onClick={() => navigate('/dashboard')}
        >
          <HomeIcon className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 p-0 text-gray-500 hover:bg-gray-100 transition-colors duration-200"
        >
          <MessageSquareIcon className="h-5 w-5" />
        </Button>

        {/* Placeholder for the elevated plus button */}
        <div className="h-10 w-10 opacity-0"></div>

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 p-0 text-gray-500 hover:bg-gray-100 transition-colors duration-200"
        >
          <BellIcon className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 p-0 text-gray-500 hover:bg-gray-100 transition-colors duration-200"
        >
          <UserIcon className="h-5 w-5" />
        </Button>
      </div>

      {/* Elevated circular plus button */}
      <Button
        size="icon"
        className="absolute bottom-[34px] left-1/2 transform -translate-x-1/2 w-[49px] h-[49px] bg-[#74a4ee] rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2)] flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={toggleFab}
      >
        <PlusIcon className={`h-[34px] w-[34px] text-white transition-transform duration-300 ${isFabExpanded ? 'rotate-45' : 'rotate-0'}`} />
      </Button>

      {/* FAB expanded options */}
      {isFabExpanded && (
        <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 animate-fab-expand">
          <Button
            size="icon"
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100"
            onClick={() => handleFabOptionClick('/journals')}
          >
            <BookOpenTextIcon className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100"
            onClick={() => handleFabOptionClick('/request-feedback')}
          >
            <SendIcon className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100"
            onClick={() => handleFabOptionClick('/schedule-session')}
          >
            <CalendarCheckIcon className="w-5 h-5" />
          </Button>
        </div>
      )}
    </footer>
  );
};
