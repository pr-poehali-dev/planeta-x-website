import React, { useState } from "react";
import Icon from "@/components/ui/icon";

interface Track {
  id: string;
  title: string;
  duration: string;
  artist: string;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

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
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-6 font-montserrat">Музыка</h2>

      <div className="bg-gradient-to-r from-purple-800 to-orange-600 rounded-lg p-4 mb-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-black/30 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="Music" size={24} className="text-white" />
          </div>
          <h3 className="font-bold font-montserrat">
            {tracks[currentTrack].title}
          </h3>
          <p className="text-sm opacity-80 font-open-sans">
            {tracks[currentTrack].artist}
          </p>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-4">
          <button className="p-2 hover-scale">
            <Icon name="SkipBack" size={20} />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-orange-500 rounded-full hover-scale"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
          </button>
          <button className="p-2 hover-scale">
            <Icon name="SkipForward" size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            onClick={() => setCurrentTrack(index)}
            className={`p-3 rounded-lg flex items-center space-x-3 cursor-pointer hover-scale ${
              index === currentTrack ? "bg-gray-700" : "bg-gray-800"
            }`}
          >
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <Icon name="Music" size={14} />
            </div>
            <div className="flex-1">
              <p className="font-medium font-open-sans">{track.title}</p>
              <p className="text-xs text-gray-400">{track.artist}</p>
            </div>
            <span className="text-sm text-gray-400">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
