import React from "react";
import Icon from "@/components/ui/icon";

const GameInfo = () => {
  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-6 font-montserrat">Об игре</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-purple-800 to-gray-800 rounded-lg p-6">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Telescope" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold font-montserrat">Планета X</h3>
            <p className="text-orange-400 font-open-sans">Точка невозврата</p>
          </div>
          <p className="text-sm text-gray-300 text-center font-open-sans">
            Логическая игра о поиске неизвестной планеты на краю Солнечной
            системы
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-bold mb-3 font-montserrat flex items-center">
            <Icon name="Target" size={16} className="mr-2 text-orange-400" />
            Цель игры
          </h4>
          <p className="text-sm text-gray-300 font-open-sans">
            Используйте логику и дедукцию, чтобы первыми найти местоположение
            таинственной Планеты X, анализируя данные телескопов и космических
            зондов.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-bold mb-3 font-montserrat flex items-center">
            <Icon name="Gamepad2" size={16} className="mr-2 text-orange-400" />
            Как играть
          </h4>
          <div className="space-y-2 text-sm text-gray-300 font-open-sans">
            <div className="flex items-start space-x-2">
              <span className="text-orange-400">1.</span>
              <span>Сканируйте QR-коды для получения данных исследований</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-orange-400">2.</span>
              <span>Анализируйте информацию о небесных объектах</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-orange-400">3.</span>
              <span>Делайте выводы о расположении планет</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-orange-400">4.</span>
              <span>Найдите Планету X первыми!</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-bold mb-3 font-montserrat flex items-center">
            <Icon name="Award" size={16} className="mr-2 text-orange-400" />
            Награды
          </h4>
          <div className="space-y-2 text-sm text-gray-300 font-open-sans">
            <p>🏆 Игра года — BoardGameGeek 2020</p>
            <p>🎖️ Золотая печать — Mensa Select</p>
            <p>⭐ 8.2/10 — BGG Rating</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-bold mb-3 font-montserrat flex items-center">
            <Icon name="Users" size={16} className="mr-2 text-orange-400" />
            Создатели
          </h4>
          <p className="text-sm text-gray-300 font-open-sans">
            Дизайн: Мэттью О'Мэлли, Бен Росс
            <br />
            Художник: Гуг Ваон
            <br />
            Издатель: Foxtrot Games
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
