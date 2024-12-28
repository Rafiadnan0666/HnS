import React, { useState, useEffect } from "react";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const blobFollow = setInterval(() => {
      setBlobPosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.2,
        y: prev.y + (cursorPosition.y - prev.y) * 0.2,
      }));
    }, 16);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(blobFollow);
    };
  }, [cursorPosition]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-800 text-gray-300 font-[Audiowide] overflow-hidden">
      {/* Blob */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "100px",
          height: "100px",
          background: "white",
          left: `${blobPosition.x - 50}px`,
          top: `${blobPosition.y - 50}px`,
          mixBlendMode: "difference", // Key to creating the "area turn" effect
        }}
      ></div>

      {/* Center Text with Mask Effect */}
      <h1
        className="text-[18rem] font-bold tracking-wider text-gray-100 z-10"
        style={{
          position: "relative",
          mixBlendMode: "difference", // Works with the blob to invert colors
        }}
      >
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

   
      <div className="absolute bottom-0 w-full h-[40vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          style={{
            transform: `translateX(${(cursorPosition.x - window.innerWidth / 2) * 0.05}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* <path
            fill="url(#grayGradient)"
            fillOpacity="1"
            d="M0,128L40,138.7C80,149,160,171,240,160C320,149,400,107,480,85.3C560,64,640,64,720,80C800,96,880,128,960,154.7C1040,181,1120,203,1200,208C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          /> */}
          <defs>
            {/* <linearGradient id="grayGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#d1d1d1" />
              <stop offset="100%" stopColor="#6c6c6c" />
            </linearGradient> */}
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
