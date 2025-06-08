import React from "react";

const GameHeader = () => {
  return (
    <header className="relative overflow-hidden">
      <div
        className="h-32 bg-gradient-to-r from-purple-900 via-purple-700 to-orange-500 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/742da3d4-e79d-4b3c-91c3-871a69eee421.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-2xl font-bold font-montserrat tracking-wide">
            ПЛАНЕТА X
          </h1>
          <p className="text-sm opacity-90 font-open-sans">Точка невозврата</p>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
