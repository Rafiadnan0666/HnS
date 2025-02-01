import React from "react";

const About = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row min-h-screen font-[Poppins] overflow-hidden pt-16 px-6 md:px-12 bg-transparent"
      id="about"
    >
      {/* Left Side - Transparent and Empty - HIDDEN on smaller screens */}
      <div className="hidden md:block flex-1 bg-transparent"></div>

      {/* Right Side - Content */}
      <div className="relative w-full md:w-1/2 h-full flex flex-col justify-start items-start pt-8 md:pt-16 px-6 md:px-12 bg-transparent ml-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-400 mb-4" // Adjusted font size
          style={{ fontSize: "20px" }} // Further adjustment if needed
        >
          Tentang Kami
        </h2>
        <h3
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4" // Adjusted font size
          style={{
            fontSize: "4rem", // Further adjustment if needed
            fontFamily: "Bebas Neue, sans-serif",
            lineHeight: "1",
          }}
        >
          HOST ANDAL <br /> ANDA <br /> CUAN TOTAL
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed mb-6">
          HnS Agency adalah agensi yang menyediakan layanan talent host
          profesional untuk kebutuhan live online shop, e-commerce dan platform
          digital lainnya. Kami menghubungkan klien dari berbagai industri
          dengan talent host yang memiliki keterampilan komunikasi luar biasa,
          mampu berinteraksi dengan audiens, dan memasarkan produk dengan cara
          yang menarik.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed mb-6">
          Dengan fokus pada kualitas dan keahlian, kami menyediakan talent host
          yang telah terlatih untuk meningkatkan engagement audiens,
          memperkenalkan produk, dan memberikan pengalaman belanja online yang
          menyenangkan. Agensi kami membantu bisnis untuk tumbuh melalui sesi
          live streaming yang profesional, efisien dan efektif.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
          Kami menawarkan berbagai pilihan talent host sesuai dengan kriteria
          dan kebutuhan klien, mulai dari fashion, kecantikan, elektronik, dan
          lainnya. Setiap talent kami dipilih dengan seleksi ketat untuk
          memastikan mereka dapat mampu menyesuaikan dengan kebutuhan dan
          harapan klien.
        </p>
      </div>
    </section>
  );
};

export default About;