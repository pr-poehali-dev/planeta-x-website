import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SpaceBackground from "@/components/SpaceBackground";
import BottomNavigation from "@/components/BottomNavigation";

interface Track {
  id: string;
  title: string;
  duration: string;
  artist: string;
}

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [activeTab, setActiveTab] = useState("music");
  const navigate = useNavigate();

  const tracks: Track[] = [
    {
      id: "1",
      title: "Космическая тишина",
      duration: "4:23",
      artist: "Планета X OST",
    },
    {
      id: "2",
      title: "Сигналы из бездны",
      duration: "3:45",
      artist: "Планета X OST",
    },
    {
      id: "3",
      title: "Последняя надежда",
      duration: "5:12",
      artist: "Планета X OST",
    },
    { id: "4", title: "Открытие", duration: "2:58", artist: "Планета X OST" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pb-20 relative">
      <SpaceBackground />
      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-800 to-orange-600">
          <button
            onClick={() => navigate("/")}
            className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover-scale"
          >
            <Icon name="ArrowLeft" size={20} className="text-white" />
          </button>
          <h1 className="text-xl font-bold text-white font-montserrat">
            Музыка
          </h1>
          <div className="w-10"></div>
        </header>

        {/* Music Player */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-purple-800 to-orange-600 rounded-2xl p-6 mb-6 text-center">
            <div className="w-32 h-32 bg-black/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Icon name="Music" size={48} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white font-montserrat mb-2">
              {tracks[currentTrack].title}
            </h2>
            <p className="text-orange-200 font-open-sans mb-4">
              {tracks[currentTrack].artist}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2 mb-4">
              <div className="bg-orange-400 h-2 rounded-full w-1/3"></div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-8">
              <button className="p-3 hover-scale">
                <Icon name="SkipBack" size={24} className="text-white" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 bg-orange-500 rounded-full hover-scale shadow-lg"
              >
                <Icon
                  name={isPlaying ? "Pause" : "Play"}
                  size={28}
                  className="text-white"
                />
              </button>
              <button className="p-3 hover-scale">
                <Icon name="SkipForward" size={24} className="text-white" />
              </button>
            </div>
          </div>

          {/* Playlist */}
          <div className="space-y-3">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                onClick={() => setCurrentTrack(index)}
                className={`p-4 rounded-lg flex items-center space-x-4 cursor-pointer hover-scale ${
                  index === currentTrack ? "bg-gray-700" : "bg-gray-800"
                }`}
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Icon name="Music" size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white font-open-sans">
                    {track.title}
                  </p>
                  <p className="text-sm text-gray-400">{track.artist}</p>
                </div>
                <span className="text-sm text-gray-400">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>

        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Music;
