import React from "react";
import Icon from "@/components/ui/icon";

const GameStore = () => {
  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-6 font-montserrat">Купить игру</h2>

      <div className="bg-gradient-to-br from-purple-800 to-gray-800 rounded-lg p-6 mb-6">
        <div className="text-center mb-4">
          <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Rocket" size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold font-montserrat">Планета X</h3>
          <p className="text-orange-400 font-open-sans">Настольная игра</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} className="text-orange-400" />
            <span className="text-sm font-open-sans">1-4 игрока</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-orange-400" />
            <span className="text-sm font-open-sans">60-90 минут</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Target" size={16} className="text-orange-400" />
            <span className="text-sm font-open-sans">Возраст: 13+</span>
          </div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold text-orange-400 mb-4">2 999 ₽</div>

          {/* Store Buttons */}
          <div className="space-y-3 mb-4">
            <a
              href="https://www.ozon.ru/product/planeta-x-nastolnaya-igra"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover-scale font-montserrat flex items-center justify-center space-x-2"
            >
              <span>🛒</span>
              <span>Купить на Ozon</span>
            </a>

            <a
              href="https://www.wildberries.ru/catalog/planeta-x-nastolnaya-igra"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover-scale font-montserrat flex items-center justify-center space-x-2"
            >
              <span>🛍️</span>
              <span>Купить на Wildberries</span>
            </a>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover-scale font-montserrat">
            Другие магазины
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-bold mb-2 font-montserrat flex items-center">
            <Icon name="Package" size={16} className="mr-2 text-orange-400" />
            Что в коробке
          </h4>
          <ul className="text-sm space-y-1 text-gray-300 font-open-sans">
            <li>• Игровое поле</li>
            <li>• 108 карт исследований</li>
            <li>• 4 планшета исследователей</li>
            <li>• Мобильное приложение</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-bold mb-2 font-montserrat flex items-center">
            <Icon name="Truck" size={16} className="mr-2 text-orange-400" />
            Доставка
          </h4>
          <p className="text-sm text-gray-300 font-open-sans">
            Бесплатная доставка по России при заказе от 2000 ₽
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameStore;
