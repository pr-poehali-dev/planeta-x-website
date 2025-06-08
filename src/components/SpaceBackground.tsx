import React from "react";

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Звездное небо */}
      <div className="stars-container">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Планеты */}
      <div className="planet planet-1"></div>
      <div className="planet planet-2"></div>
      <div className="planet planet-3"></div>

      {/* Космическая пыль */}
      <div className="cosmic-dust">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="dust-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceBackground;
