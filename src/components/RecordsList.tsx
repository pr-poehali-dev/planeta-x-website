import React from "react";
import Icon from "@/components/ui/icon";

interface Record {
  id: string;
  title: string;
  type: "audio" | "video";
}

const RecordsList = () => {
  const records: Record[] = [
    { id: "1", title: "Инструкция к исследованию", type: "audio" },
    { id: "2", title: "Сигналы из глубокого космоса", type: "audio" },
    { id: "3", title: "Данные телескопа Хаббл", type: "video" },
    { id: "4", title: "Записи экспедиции Альфа-7", type: "audio" },
  ];

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white font-montserrat">
          Каталог
        </h2>
        <button className="p-2 bg-orange-500 rounded-lg hover-scale">
          <Icon name="QrCode" size={20} className="text-white" />
        </button>
      </div>

      {records.map((record) => (
        <div
          key={record.id}
          className="bg-gray-800 rounded-lg p-4 flex items-center space-x-3 hover-scale cursor-pointer"
        >
          <div className="p-2 bg-orange-500 rounded">
            <Icon
              name={record.type === "audio" ? "Play" : "Video"}
              size={16}
              className="text-white"
            />
          </div>
          <span className="text-orange-400 font-open-sans flex-1">
            {record.title}
          </span>
          <Icon name="ChevronRight" size={16} className="text-gray-500" />
        </div>
      ))}
    </div>
  );
};

export default RecordsList;
