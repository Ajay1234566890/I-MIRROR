import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Modal } from "../../components/ui/Modal";

export const Journals: React.FC = () => {
  const navigate = useNavigate();
  const [isAddEntryModalOpen, setIsAddEntryModalOpen] = useState(false);

  const moodOptions = [
    { emoji: "😄", label: "Excited" },
    { emoji: "😊", label: "Happy" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😢", label: "Sad" },
  ];

  const journalEntries = [
    {
      id: 1,
      date: "2024-07-20",
      content: "Had a really productive day today, feeling great about my progress!",
      mood: "😊",
    },
    {
      id: 2,
      date: "2024-07-19",
      content: "Felt a bit overwhelmed with tasks, but managed to push through.",
      mood: "😐",
    },
    {
      id: 3,
      date: "2024-07-18",
      content: "Excited about starting a new project! Lots of energy.",
      mood: "😄",
    },
  ];

  const handleBackClick = () => navigate("/dashboard");
  const openAddEntryModal = () => setIsAddEntryModalOpen(true);
  const closeAddEntryModal = () => setIsAddEntryModalOpen(false);
  const handleAddEntrySubmit = () => {
    console.log("New journal entry added!");
    closeAddEntryModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ADD8E6] to-[#E6E6FA] pb-20">
      {/* Status Bar */}
      <div className="w-full h-11 bg-white">
        <div className="ml-8 mt-4 h-4 text-black font-medium">9:41</div>
      </div>

      {/* Header Section */}
      <div className="w-full px-4 pt-4 flex flex-col items-center relative">
        <Button
          variant="ghost"
          className="absolute left-4 top-4 p-0 h-auto w-auto hover:bg-gray-100/30 transition-colors duration-200"
          onClick={handleBackClick}
        >
          <ArrowLeftIcon className="w-6 h-6 text-black" />
        </Button>
        <h1 className="font-bold text-2xl text-black text-center">Journal</h1>
        <p className="font-semibold text-xl text-center bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text mt-2">
          Welcome Rajiv!
        </p>
      </div>

      {/* Mood Tracker Section */}
      <div className="w-full px-4 mt-6">
        <Card className="p-4 rounded-2xl shadow-md bg-white">
          <h2 className="text-center text-black text-base mb-4">How is your day today?</h2>
          <div className="flex justify-around items-center">
            {moodOptions.map((mood, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
              >
                <span className="text-4xl">{mood.emoji}</span>
                <span className="text-sm text-black mt-1">{mood.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Journal History */}
      <div className="w-full px-4 mt-6">
        <h2 className="font-bold text-xl text-black mb-4">History</h2>
        <div className="flex flex-col space-y-4">
          {journalEntries.map((entry) => (
            <Card key={entry.id} className="p-4 rounded-2xl shadow-md bg-white">
              <CardContent className="p-0">
                <p className="text-sm text-gray-500 mb-2">
                  {entry.date} - Mood: {entry.mood}
                </p>
                <p className="text-black text-base">{entry.content}</p>
              </CardContent>
            </Card>
          ))}
          <Card className="p-4 rounded-2xl shadow-md bg-white">
            <CardContent className="p-0">
              <p className="text-gray-400 text-base italic">No more entries for now...</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add Entry Button */}
      <div className="w-full px-4 mt-8">
        <Button
          onClick={openAddEntryModal}
          className="w-full h-12 bg-[#74a4ee] rounded-full text-white font-medium text-base hover:bg-[#5a8fd8] transition-all"
        >
          Add Entry
        </Button>
      </div>

      {/* Modal */}
      <Modal isOpen={isAddEntryModalOpen} onClose={closeAddEntryModal} title="New Journal Entry">
        <div className="flex flex-col space-y-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg min-h-[100px] text-black"
            placeholder="Write your thoughts here..."
          ></textarea>
          <select className="w-full p-3 border border-gray-300 rounded-lg text-black">
            <option value="">Select Mood</option>
            {moodOptions.map((mood, index) => (
              <option key={index} value={mood.emoji}>
                {mood.emoji} {mood.label}
              </option>
            ))}
          </select>
          <Button
            onClick={handleAddEntrySubmit}
            className="w-full h-10 bg-[#74a4ee] rounded-full text-white font-medium hover:bg-[#5a8fd8] transition-colors"
          >
            Save Entry
          </Button>
        </div>
      </Modal>
    </div>
  );
};
