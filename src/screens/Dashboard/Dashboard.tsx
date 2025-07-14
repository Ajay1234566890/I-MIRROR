import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ChevronRightIcon, SendIcon, BookOpenTextIcon, CalendarCheckIcon, SparklesIcon, LightbulbIcon, HeartHandshakeIcon, BrainCircuitIcon, HistoryIcon, CheckCircleIcon, AlertTriangleIcon } from "lucide-react";
import { Header } from "../../components/layout/Header";
import { Modal } from "../../components/ui/Modal";

interface DashboardCardProps {
  title: string;
  icon: React.ElementType;
  count?: string;
  onClick?: () => void;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon: Icon, count, onClick, className }) => {
  return (
    <Card 
      className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-custom-light cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-custom-medium ${className}`}
      onClick={onClick}
    >
      <div className="p-3 bg-blue-100 rounded-full mb-2">
        <Icon className="w-6 h-6 text-[#74a4ee]" />
      </div>
      <h3 className="font-semibold text-sm text-center text-inkdarkest">{title}</h3>
      {count && <p className="text-xs text-gray-500 mt-1">{count}</p>}
    </Card>
  );
};

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isFeedbackHistoryModalOpen, setIsFeedbackHistoryModalOpen] = useState(false);

  const handleRequestFeedback = () => {
    navigate('/request-feedback');
  };

  const openFeedbackHistoryModal = () => {
    setIsFeedbackHistoryModalOpen(true);
  };

  const closeFeedbackHistoryModal = () => {
    setIsFeedbackHistoryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-sky-blue to-lavender-blush pb-20">
      {/* Status bar - assuming it's handled by Layout or global styles */}
      <div className="w-full h-11 bg-skywhite">
        <div className="ml-[30px] mt-[15px] h-4 text-inkdarkest font-medium">
          9:41
        </div>
      </div>

      <Header />

      <div className="w-full px-4 mt-6">
        <h2 className="font-bold text-xl text-inkdarkest mb-4">Welcome!</h2>
        <div className="grid grid-cols-2 gap-4">
          <DashboardCard 
            title="Request Feedback" 
            icon={SendIcon} 
            count="1/5" 
            onClick={handleRequestFeedback} 
          />
          <DashboardCard 
            title="Self Assessment" 
            icon={LightbulbIcon} 
            onClick={() => console.log("Self Assessment clicked")} 
          />
          <DashboardCard 
            title="Journal Stories" 
            icon={BookOpenTextIcon} 
            onClick={() => navigate('/journals')} 
          />
          <DashboardCard 
            title="Mood Tracker" 
            icon={SparklesIcon} 
            onClick={() => console.log("Mood Tracker clicked")} 
          />
          <DashboardCard 
            title="Coaches/Therapists" 
            icon={HeartHandshakeIcon} 
            onClick={() => console.log("Coaches/Therapists clicked")} 
          />
          <DashboardCard 
            title="My Sessions" 
            icon={CalendarCheckIcon} 
            onClick={() => console.log("My Sessions clicked")} 
          />
        </div>
      </div>

      <div className="w-full px-4 mt-8">
        <h2 className="font-bold text-xl text-inkdarkest mb-4">Updates</h2>
        <Card className="w-full p-4 rounded-full bg-white shadow-custom-light flex items-center justify-center transition-all duration-200 hover:shadow-custom-medium hover:inner-glow group">
          <AlertTriangleIcon className="w-5 h-5 text-yellow-500 mr-2" />
          <p className="text-inkdarkest group-hover:text-gray-800 transition-colors duration-200">No Updates</p>
        </Card>
      </div>

      <div className="w-full px-4 mt-8">
        <h2 className="font-bold text-xl text-inkdarkest mb-4">Your Progress</h2>
        <Card className="w-full p-4 rounded-full bg-white shadow-custom-light flex items-center justify-center transition-all duration-200 hover:shadow-custom-medium hover:inner-glow group">
          <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
          <p className="text-inkdarkest group-hover:text-gray-800 transition-colors duration-200">All caught up!</p>
        </Card>
      </div>

      {/* Feedback History Button */}
      <div className="w-full px-4 mt-8">
        <Button 
          onClick={openFeedbackHistoryModal}
          className="w-full h-12 bg-[#74a4ee] rounded-full text-white font-medium flex items-center justify-center shadow-custom-light hover:bg-[#5a8fd8] transition-colors duration-200"
        >
          <HistoryIcon className="w-5 h-5 mr-2" />
          <span>View Feedback History</span>
        </Button>
      </div>

      {/* Feedback History Modal */}
      <Modal isOpen={isFeedbackHistoryModalOpen} onClose={closeFeedbackHistoryModal} title="Feedback History">
        <div className="text-inkdarkest">
          <p>This is where your feedback history will be displayed.</p>
          <p>You have no past feedback entries yet.</p>
        </div>
      </Modal>
    </div>
  );
};
