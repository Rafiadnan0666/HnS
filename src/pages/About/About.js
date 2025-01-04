import React from "react";

const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 font-[Audiowide] overflow-hidden px-4 sm:px-8" id="about">
      {/* Glowing Background Effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "screen",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center p-8">
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-100 mb-6">About Us</h2>
        <p style={{ fontSize: "1.25rem" }} className="text-lg sm:text-xl text-gray-400 leading-relaxed">
          Welcome to <span className="text-white font-bold">Host n Stream</span>
          (HnS) Agency, a provider of professional talent hosts for your live streaming, e-commerce, and online shop needs. We bring talented, experienced, and dedicated hosts to help you boost customer interaction, build brand loyalty, and drive sales effectively.
        </p>
        <p style={{ fontSize: "1.25rem" }} className="text-lg sm:text-xl text-gray-400 mt-4 leading-relaxed">
          Whether you're hosting a virtual event, gaming stream, or a live podcast, we've got you covered. Join us and elevate your streaming journey to the next level.
        </p>
      </div>

      {/* Decorative Wave at Bottom */}
      {/* <div className="absolute bottom-0 w-full h-[40vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          style={{
            transform: "translateY(10px)",
            fill: "#1f2937",
          }}
        >
          <path d="M0,160L40,165.3C80,171,160,181,240,176C320,171,400,149,480,138.7C560,128,640,128,720,144C800,160,880,192,960,213.3C1040,235,1120,245,1200,240C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default About;
