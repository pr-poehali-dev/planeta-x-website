import React, { useState } from "react";
import GameHeader from "@/components/GameHeader";
import RecordsList from "@/components/RecordsList";
import MusicPlayer from "@/components/MusicPlayer";
import GameStore from "@/components/GameStore";
import GameNews from "@/components/GameNews";
import GameInfo from "@/components/GameInfo";
import BottomNavigation from "@/components/BottomNavigation";
import SpaceBackground from "@/components/SpaceBackground";
import QRModal from "@/components/QRModal";

const Index = () => {
  const [activeTab, setActiveTab] = useState("catalog");
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "catalog":
        return <RecordsList />;
      case "music":
        return <MusicPlayer />;
      case "store":
        return <GameStore />;
      case "news":
        return <GameNews />;
      case "about":
        return <GameInfo />;
      default:
        return <RecordsList />;
    }
  };

  return (
    <div className="min-h-full bg-gray-900 flex flex-col relative">
      <SpaceBackground />
      <div className="relative z-10 flex flex-col h-full">
        <GameHeader onQRClick={() => setIsQRModalOpen(true)} />
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <QRModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </div>
  );
};

export default Index;
