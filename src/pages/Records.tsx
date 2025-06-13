import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SpaceBackground from "@/components/SpaceBackground";
import BottomNavigation from "@/components/BottomNavigation";

interface Record {
  id: string;
  title: string;
  type: "audio" | "video";
  duration?: string;
}

const Records = () => {
  const [activeTab, setActiveTab] = useState("catalog");
  const [showScanner, setShowScanner] = useState(false);
  const navigate = useNavigate();

  const records: Record[] = [
    {
      id: "1",
      title: "Инструкция к исследованию",
      type: "audio",
      duration: "2:15",
    },
    {
      id: "2",
      title: "Сигналы из глубокого космоса",
      type: "audio",
      duration: "4:30",
    },
    {
      id: "3",
      title: "Данные телескопа Хаббл",
      type: "video",
      duration: "6:45",
    },
    {
      id: "4",
      title: "Записи экспедиции Альфа-7",
      type: "audio",
      duration: "3:20",
    },
    {
      id: "5",
      title: "Анализ неизвестных структур",
      type: "video",
      duration: "8:12",
    },
    { id: "6", title: "Последние координаты", type: "audio", duration: "1:45" },
  ];

  const startQRScanner = () => {
    setShowScanner(true);
    // Здесь будет логика QR-сканера
    setTimeout(() => {
      setShowScanner(false);
      alert("QR-код отсканирован! Новая запись добавлена в каталог.");
    }, 3000);
  };

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
            Каталог записей
          </h1>
          <button
            onClick={startQRScanner}
            className="p-2 bg-orange-500 rounded-full hover-scale shadow-lg"
          >
            <Icon name="QrCode" size={20} className="text-white" />
          </button>
        </header>

        {/* QR Scanner Modal */}
        {showScanner && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 m-4 text-center">
              <div className="w-48 h-48 bg-gray-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="border-4 border-orange-500 border-dashed w-32 h-32 rounded-lg flex items-center justify-center animate-pulse">
                  <Icon name="QrCode" size={32} className="text-orange-500" />
                </div>
              </div>
              <p className="text-white font-montserrat mb-4">
                Наведите камеру на QR-код
              </p>
              <button
                onClick={() => setShowScanner(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover-scale"
              >
                Отмена
              </button>
            </div>
          </div>
        )}

        {/* Records List */}
        <div className="p-4 space-y-3">
          {records.map((record) => (
            <div
              key={record.id}
              className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4 hover-scale cursor-pointer"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Icon
                  name={record.type === "audio" ? "Play" : "Video"}
                  size={20}
                  className="text-white"
                />
              </div>
              <div className="flex-1">
                <p className="text-orange-400 font-open-sans font-medium">
                  {record.title}
                </p>
                <p className="text-sm text-gray-500">
                  {record.type === "audio" ? "Аудиозапись" : "Видеозапись"} •{" "}
                  {record.duration}
                </p>
              </div>
              <Icon name="ChevronRight" size={16} className="text-gray-500" />
            </div>
          ))}
        </div>

        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Records;
