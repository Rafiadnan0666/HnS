import React from "react";

const Whyus = () => {
  return (
    <div className="font-poppins bg-white text-black">
      {/* Visi Section */}
      <section className="min-h-screen md:h-10 lg:md:h-10 sm:md:h-10 flex flex-col justify-center items-start px-6 md:px-16 relative bg-white">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4" // Adjusted font size
          style={{ fontSize: "4rem", fontWeight: "900", marginBottom: "1rem" }} // Further adjustment
        >
          VISI
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl font-light leading-relaxed" // Adjusted font size
          style={{
            fontSize: "1.5rem", // Further adjustment
            fontWeight: "300",
            lineHeight: "1.2", // Improved line height for readability
            maxWidth: "90%", // Slightly wider for better flow
          }}
        >
          Menjadi mitra terdepan dalam menyediakan layanan host live streaming
          yang profesional, dan terpercaya, guna mendukung interaksi,
          promosi, dan penjualan bagi pelaku online shop dan e-commerce.
        </p>
      </section>

      {/* Misi Section */}
      <section className="min-h-screen flex flex-col md:h-10 lg:md:h-10 sm:md:h-10 justify-center items-start px-6 md:px-16 relative bg-white">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4" // Adjusted font size
          style={{ fontSize: "4rem", fontWeight: "900", marginBottom: "1rem" }} // Further adjustment
        >
          MISI
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl font-light leading-relaxed" // Adjusted font size
          style={{
            fontSize: "1.5rem", // Further adjustment
            fontWeight: "300",
            lineHeight: "1.2", // Improved line height
            maxWidth: "90%", // Slightly wider
          }}
        >
          Memberikan layanan dengan harga yang kompetitif tanpa mengorbankan
          kualitas, sehingga dapat diakses oleh berbagai pelaku bisnis.
        </p>
      </section>
    </div>
  );
};

export default Whyus;