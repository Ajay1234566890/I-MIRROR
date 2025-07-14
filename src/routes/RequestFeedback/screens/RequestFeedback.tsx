import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

// Template categories data
const templates = [
  {
    id: "personal-growth",
    name: "Personal Growth",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/vector-1.svg",
  },
  {
    id: "emotional-intelligence",
    name: "Emotional Intelligence",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/noto-brain.svg",
  },
  {
    id: "relationship",
    name: "Relationship",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/mdi-users.svg",
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/meditation-streamline-flex-gradient.png",
  },
  {
    id: "communication",
    name: "Communication",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/ix-shout.svg",
  },
  {
    id: "values",
    name: "Values",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/solar-shield-check-bold.svg",
  },
  {
    id: "conflicts-resolution",
    name: "Conflicts Resolution",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/noto-compass.svg",
  },
  {
    id: "confidence",
    name: "Confidence",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/noto-sparkles.svg",
  },
  {
    id: "romantic",
    name: "Romantic",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/love.png",
  },
];

export const RequestFeedback: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState("personal-growth");

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  const handleTemplateClick = (templateId: string) => {
    setSelectedTemplate(templateId);
    // Show selection feedback
    console.log(`Selected template: ${templateId}`);
  };

  // Find the selected template
  const activeTemplate = templates.find(t => t.id === selectedTemplate) || templates[0];

  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)]">
      {/* Status Bar */}
      <div className="w-full h-11 bg-skywhite flex-shrink-0">
        <div className="h-4 mt-[15px] ml-[30px] font-medium text-inkdarkest">
          9:41
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-center relative pt-4 pb-2">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-[21px] p-0 h-auto w-auto hover:bg-gray-100/30 transition-colors duration-200"
          onClick={handleBackClick}
        >
          <ArrowLeftIcon className="w-[31px] h-[15px]" />
        </Button>
        <h1 className="font-bold text-2xl text-inkdarkest text-center">
          Request Feedback
        </h1>
      </div>

      {/* Main Content Card */}
      <div className="w-[359px] mx-auto mt-4 rounded-[40px_40px_0px_0px] shadow-[0px_0px_35.3px_#00000017] bg-white flex-grow mb-20">
        <Card className="rounded-[40px_40px_0px_0px] border-none shadow-none h-full">
          <CardContent className="p-0 pt-8">
            {/* Template Selection Header */}
            <div className="w-[327px] h-12 mx-auto rounded-[48px] flex items-center justify-center">
              <div className="text-center text-primarybase font-medium">
                Choose a Template
              </div>
            </div>

            {/* Selected Template */}
            <div className="w-[308px] h-[63px] mt-6 mx-auto bg-blue-100 rounded-[10px] shadow-[0px_6px_10px_#00000012] flex items-center">
              <div className="w-[63px] h-[63px] bg-[#8b5cf645] rounded-[10px_0px_0px_10px] flex items-center justify-center">
                <img className="w-6 h-6" alt="Icon favourite" src={activeTemplate.icon} />
              </div>
              <div className="ml-[14px] font-semibold text-inkdarkest text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {activeTemplate.name}
              </div>
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8 mx-auto w-[320px] pb-8">
              {templates.map((template) => (
                <div 
                  key={template.id} 
                  className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
                    selectedTemplate === template.id 
                      ? 'scale-105 opacity-100' 
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                  }`}
                  onClick={() => handleTemplateClick(template.id)}
                >
                  <Card className={`w-[89px] h-[89px] rounded-[10px] border border-solid flex items-center justify-center ${
                    selectedTemplate === template.id 
                      ? 'bg-blue-200 border-[#74a4ee]' 
                      : 'bg-blue-100 border-[#e1e1e1]'
                  }`}>
                    <CardContent className="p-0 flex items-center justify-center">
                      <img
                        className="w-[53px] h-[53px]"
                        alt={template.name}
                        src={template.icon}
                      />
                    </CardContent>
                  </Card>
                  <div className="mt-2 text-center text-black text-sm font-normal">
                    {template.name}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
