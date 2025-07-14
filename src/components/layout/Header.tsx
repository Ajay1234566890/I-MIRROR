import { SparkleIcon } from "lucide-react";
import React from "react";

interface HeaderProps {
  title?: string;
  showProfile?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showProfile = true }) => {
  return (
    <header className="w-full pt-4 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-2xl text-inkdarkest">I Mirror</h1>
        <SparkleIcon className="w-5 h-5 text-yellow-400" fill="currentColor" />
      </div>
      {showProfile && (
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <img
            src="https://c.animaapp.com/mcx8of52P3cLSw/img/profile-placeholder.png" // Placeholder image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </header>
  );
};
