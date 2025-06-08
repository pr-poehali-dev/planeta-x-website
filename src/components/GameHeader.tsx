import React from "react";

const GameHeader = () => {
  return (
    <header className="relative overflow-hidden">
      <div
        className="h-32 bg-gradient-to-r from-purple-900/90 via-purple-700/90 to-orange-500/90 flex items-center justify-center backdrop-blur-sm"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/742da3d4-e79d-4b3c-91c3-871a69eee421.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-2xl font-bold font-montserrat tracking-wide drop-shadow-lg">
            ПЛАНЕТА X
          </h1>
          <p className="text-sm opacity-90 font-open-sans drop-shadow-md">
            Точка невозврата
          </p>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
