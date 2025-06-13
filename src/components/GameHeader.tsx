import React from "react";

const GameHeader = () => {
  return (
    <header className="relative overflow-hidden">
      <div
        className="h-40 bg-gradient-to-br from-purple-900 via-indigo-800 to-orange-500 flex flex-col items-center justify-center backdrop-blur-sm relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-800/80 to-orange-500/80"></div>

        {/* Logo */}
        <div className="relative z-10 flex items-center justify-center mb-2">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
            <span className="text-2xl">🚀</span>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold font-montserrat tracking-wide text-white drop-shadow-2xl">
              ПЛАНЕТА X
            </h1>
            <p className="text-sm text-orange-200 font-open-sans drop-shadow-md -mt-1">
              Точка невозврата
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="relative z-10 flex items-center space-x-4 mt-2">
          <a
            href="https://t.me/planetaxgame"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover-scale backdrop-blur-sm"
          >
            <span className="text-lg">📱</span>
          </a>
          <a
            href="https://instagram.com/planetaxgame"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover-scale backdrop-blur-sm"
          >
            <span className="text-lg">📷</span>
          </a>
          <a
            href="https://youtube.com/@planetaxgame"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover-scale backdrop-blur-sm"
          >
            <span className="text-lg">▶️</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
