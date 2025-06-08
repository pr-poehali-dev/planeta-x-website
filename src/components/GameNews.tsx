import React from "react";
import Icon from "@/components/ui/icon";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  type: "update" | "event" | "announcement";
}

const GameNews = () => {
  const news: NewsItem[] = [
    {
      id: "1",
      title: "Обновление приложения v2.1",
      date: "15 декабря 2024",
      summary: "Добавлен новый режим исследования и исправлены ошибки сканера",
      type: "update",
    },
    {
      id: "2",
      title: 'Турнир "Поиск Планеты X"',
      date: "8 декабря 2024",
      summary: "Онлайн-турнир для всех владельцев игры. Регистрация открыта!",
      type: "event",
    },
    {
      id: "3",
      title: 'Дополнение "Далёкие миры"',
      date: "1 декабря 2024",
      summary:
        "Анонс нового дополнения с 50 дополнительными картами исследований",
      type: "announcement",
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "update":
        return "Download";
      case "event":
        return "Calendar";
      case "announcement":
        return "Megaphone";
      default:
        return "Bell";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "update":
        return "bg-blue-500";
      case "event":
        return "bg-green-500";
      case "announcement":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-6 font-montserrat">Новости</h2>

      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg p-4 hover-scale cursor-pointer"
          >
            <div className="flex items-start space-x-3">
              <div
                className={`p-2 ${getTypeColor(item.type)} rounded-lg flex-shrink-0`}
              >
                <Icon
                  name={getTypeIcon(item.type) as any}
                  size={16}
                  className="text-white"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold font-montserrat mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-2 font-open-sans">
                  {item.date}
                </p>
                <p className="text-sm text-gray-300 font-open-sans">
                  {item.summary}
                </p>
              </div>
              <Icon
                name="ChevronRight"
                size={16}
                className="text-gray-500 flex-shrink-0"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-purple-800 to-orange-600 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <Icon name="Bell" size={20} className="text-white" />
          <div>
            <h3 className="font-bold font-montserrat">Уведомления</h3>
            <p className="text-sm opacity-80 font-open-sans">
              Получайте новости первыми
            </p>
          </div>
        </div>
        <button className="w-full mt-3 bg-white/20 text-white py-2 rounded-lg font-open-sans hover-scale">
          Подписаться
        </button>
      </div>
    </div>
  );
};

export default GameNews;
