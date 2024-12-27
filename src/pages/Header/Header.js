import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const blobFollow = setInterval(() => {
      setBlobPosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.1,
        y: prev.y + (cursorPosition.y - prev.y) * 0.1,
      }));
    }, 16);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blobFollow);
    };
  }, [cursorPosition]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white font-poppins overflow-hidden">
      {/* Blob */}
      <div
        className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{
          left: `${blobPosition.x - 150}px`,
          top: `${blobPosition.y - 150}px`,
        }}
      ></div>

      {/* Line Renderer */}
      <svg
        className="absolute w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1={cursorPosition.x}
          y1={cursorPosition.y}
          x2={blobPosition.x}
          y2={blobPosition.y}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />
      </svg>

      {/* Center HnS */}
      <h1 className="text-[15rem] font-bold tracking-wide text-white z-10">HnS</h1>

      {/* Top Left Text */}
      <small className="absolute top-5 left-5 text-xs text-gray-400 z-10">
        Host n Stream
      </small>

      {/* Bottom Right Text */}
      <small className="absolute bottom-5 right-5 text-xs text-gray-400 z-10">
        Live Streaming Host Service
      </small>

      {/* Learn More Button */}
      <div className="mt-10 z-10">
        <button className="relative inline-block px-8 py-3 text-lg font-medium group">
          {/* Pulsating Glow */}
          <span className="absolute inset-0 w-full h-full transition-transform transform scale-100 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg group-hover:scale-125 animate-pulse"></span>
          {/* Expanding Border */}
          <span className="absolute inset-0 w-full h-full border border-gray-300 group-hover:border-blue-400 transition-all duration-300 ease-out"></span>
          {/* Text Animation */}
          <span className="relative text-gray-300 group-hover:text-white transition-all duration-300 ease-out group-hover:animate-bounce">
            Learn More
          </span>
        </button>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-5 right-5 w-16 h-1 bg-white transform rotate-12 blur-sm opacity-75"></div>
      <div className="absolute bottom-5 left-5 w-16 h-1 bg-white transform -rotate-12 blur-sm opacity-75"></div>
    </div>
  );
};

export default Hero;
