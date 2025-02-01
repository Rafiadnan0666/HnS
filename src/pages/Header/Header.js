import React from "react";
import "./Header.css";

const Hero = () => {
  return (
    <section className="ok relative none h-screen sm:text-[2rem] bg-transparent text-black font-sans" id="home">
      {/* Left Side Image */}
      <div className="haha w-full h-full bg-transparent fixed left-0 top-0">
        <div className="gambar w-full h-full bg-gray-300 flex items-center justify-center"></div>
      </div>

      {/* Right Side Content */}
      <div className="relative w-1/2 h-full flex flex-col justify-start items-start pt-16 px-12 bg-transparent ml-auto md:items-center md:text-center">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl mt-0 p-0 font-extrabold hero-heading text-left md:text-center"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            lineHeight: "0.9", // Reduce the spacing between lines
            marginBottom: "0", // Remove any default margin
          }}
        >
          HNS AGENCY
        </h1>
        <p
          className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold text-black text-left md:text-center"
          style={{
            marginTop: "-20px", // Move the paragraph upward closer to the heading
            fontFamily: "Poppins",
            lineHeight: "1.2", // Add more space between lines
            marginBottom: "20px", // Add space below the paragraph
          }}
        >
          Layanan Penyedia Talent Host Live Streaming untuk Kebutuhan Live Online Shop
        </p>
        <button
          className="mt-10 px-8 py-4 bg-black text-white text-lg sm:text-xl font-medium rounded-lg hover:bg-gray-800 transition duration-300"
          style={{
            fontFamily: "Poppins",
          }}
          onClick={() =>
            window.location.assign(
              "https://api.whatsapp.com/send/?phone=+6282227782062&text=Halo, HnS Agency! Saya tertarik menggunakan jasa talent host dari HnS Agency untuk kebutuhan live streaming. Apakah saya bisa mendapatkan informasi lebih lanjut?&type=phone_number&app_absent=0"
            )
          }
        >
          Hubungi Kami
        </button>
      </div>
    </section>
  );
};

export default Hero;