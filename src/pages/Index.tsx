import React, { useState } from "react";
import GameHeader from "@/components/GameHeader";
import RecordsList from "@/components/RecordsList";
import MusicPlayer from "@/components/MusicPlayer";
import GameStore from "@/components/GameStore";
import GameNews from "@/components/GameNews";
import GameInfo from "@/components/GameInfo";
import BottomNavigation from "@/components/BottomNavigation";
import SpaceBackground from "@/components/SpaceBackground";

const Index = () => {
  const [activeTab, setActiveTab] = useState("catalog");

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
    <div className="min-h-screen bg-gray-900 pb-20 relative">
      <SpaceBackground />
      <div className="relative z-10">
        <GameHeader />
        <main className="relative">{renderContent()}</main>
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Index;
