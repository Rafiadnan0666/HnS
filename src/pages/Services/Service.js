import React from "react";

const Service = () => {
  const services = [
    {
      title: "Live Streaming",
      description:
        "High-quality, low-latency streaming for creators and businesses.",
      icon: "🎥",
    },
    {
      title: "Event Hosting",
      description:
        "Reliable infrastructure for hosting virtual events and conferences.",
      icon: "🌐",
    },
    {
      title: "Analytics",
      description:
        "Gain insights into your audience with real-time analytics tools.",
      icon: "📊",
    },
    {
      title: "Customization",
      description:
        "Tailor your streaming experience to match your brand and goals.",
      icon: "🎨",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 font-[Audiowide] overflow-hidden">
      {/* Glowing Background Effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 70%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "screen",
          filter: "blur(120px)",
          zIndex: 1,
        }}
      ></div>

      {/* Title */}
      <h2 className="relative z-10 text-6xl font-bold text-gray-100 mb-12">
        Our Services
      </h2>

      {/* Service Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Glowing Icon */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(30px)",
                zIndex: -1,
              }}
            ></div>

            <div className="text-4xl mb-4 text-gray-100">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 w-full h-[40vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          style={{
            transform: "translateY(10px)",
            fill: "#1f2937",
          }}
        >
          <path
            d="M0,256L48,234.7C96,213,192,171,288,138.7C384,107,480,85,576,101.3C672,117,768,171,864,186.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Service;
