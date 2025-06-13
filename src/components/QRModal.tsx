import React from "react";
import Icon from "@/components/ui/icon";

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="qr-modal-overlay" onClick={onClose}>
      <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
        >
          <Icon name="X" size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Скачать игру</h2>

        <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <div className="text-6xl">📱</div>
        </div>

        <p className="text-gray-600 mb-2">Отсканируйте QR-код для загрузки</p>
        <p className="text-sm text-gray-500">Планета X - Точка невозврата</p>
      </div>
    </div>
  );
};

export default QRModal;
