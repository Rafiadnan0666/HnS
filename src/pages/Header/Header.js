import React, { useState, useEffect } from "react";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const lightFollow = setInterval(() => {
      setLightPosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.15,
        y: prev.y + (cursorPosition.y - prev.y) * 0.15,
      }));
    }, 16);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(lightFollow);
    };
  }, [cursorPosition]);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gray-800 text-gray-300 font-[Audiowide] overflow-hidden" id="home">
      {/* Intense Light Glow Effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "100px",
          height: "100px",
          left: `${lightPosition.x - 150}px`,
          top: `${lightPosition.y - 150}px`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "screen", 
          filter: "blur(50px)", 
        }}
      ></div>

      {/* Center Text with Subtle Effect */}
      <h1
        className="text-[18rem] font-bold tracking-wider text-gray-100 z-10"
        style={{
          position: "relative",
          mixBlendMode: "difference",
        }}
      >
        HnS
      </h1>

      {/* Top Left Text */}
      <small className="absolute top-10 left-10 text-sm text-gray-500 z-10">
        Host n Stream
      </small>

      <button
        onClick={() =>
          window.location.assign(
            "https://api.whatsapp.com/send/?phone=+082227782062&text=Halo, HnS Agency! Saya tertarik menggunakan jasa talent host dari HnS Agency untuk kebutuhan live streaming. Apakah saya bisa mendapatkan informasi lebih lanjut?&type=phone_number&app_absent=0"
          )
        }
        className="z-50 px-8 py-4 bg-[#34D399] text-gray-900 text-lg font-bold rounded-lg shadow-lg hover:bg-[#2EBF89] transition-all duration-300"
      >
        Hubungi Kami
      </button>

      {/* Bottom Right Text */}
      <small className="absolute bottom-10 right-10 text-sm text-gray-500 z-10">
        Live Streaming Host Service
      </small>

      {/* Decorative SVG Wave */}
      <div className="absolute bottom-0 w-full h-[40vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          style={{
            transform: `translateX(${
              (cursorPosition.x - window.innerWidth / 2) * 0.05
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Add your SVG path here */}
        </svg>
      </div>
    </section>
  );
};

export default Hero;
