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
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-800 text-gray-300 font-[Audiowide] overflow-hidden">
      {/* Blob */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #bfbfbf, #7f7f7f)',
          left: `${blobPosition.x - 175}px`,
          top: `${blobPosition.y - 175}px`,
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
          stroke="#4f4f4f"
          strokeWidth="3"
        />
      </svg>

      {/* Center HnS */}
      <h1 className="text-[18rem] font-bold tracking-wider text-gray-100 z-10">
        HnS
      </h1>

      {/* Top Left Text */}
      <small className="absolute top-10 left-10 text-sm text-gray-500 z-10">
        Host n Stream
      </small>

      {/* Bottom Right Text */}
      <small className="absolute bottom-10 right-10 text-sm text-gray-500 z-10">
        Live Streaming Host Service
      </small>

      {/* Learn More Button */}
      <div className="mt-10 z-10">
        <button className="relative inline-block px-10 py-4 text-lg font-medium group">
          {/* Pulsating Glow */}
          <span className="absolute inset-0 w-full h-full transition-transform transform scale-100 bg-gray-500 opacity-20 group-hover:scale-125 animate-pulse"></span>
          {/* Border Effect */}
          <span className="absolute inset-0 w-full h-full border border-gray-500 group-hover:border-gray-300 transition-all duration-300 ease-out"></span>
          {/* Text Animation */}
          <span className="relative text-gray-400 group-hover:text-gray-100 transition-all duration-300 ease-out group-hover:animate-bounce">
            Learn More
          </span>
        </button>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-10 right-10 w-16 h-2 bg-gray-400 transform rotate-12 opacity-90"></div>
      <div className="absolute bottom-10 left-10 w-16 h-2 bg-gray-400 transform -rotate-12 opacity-90"></div>
    </div>
  );
};

export default Hero;
