import React from "react";

const Whyus = () => {
  return (
    <div className="font-poppins bg-white text-black">
      {/* Visi Section */}
      <section
        className="h-screen flex flex-col justify-center items-start px-8 md:px-16 relative bg-white"
        style={{ zIndex: 100 }}
      >
        <h1
          className="text-5xl sm:text-6xl md:text-9xl font-extrabold mb-4"
          style={{ fontSize: "15rem", fontWeight: "900", marginBottom: "1rem" }}
        >
          VISI
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-4xl font-light leading-tight"
          style={{
            fontSize: "6rem",
            fontWeight: "300",
            lineHeight: "1",
            maxWidth: "80%",
          }}
        >
          Menjadi mitra terdepan dalam menyediakan layanan host live streaming
          yang profesional, dan terpercaya, guna mendukung interaksi,
          promosi, dan penjualan bagi pelaku online shop dan e-commerce.
        </p>
      </section>

      {/* Misi Section */}
      <section
        className="h-screen flex flex-col justify-center items-start px-8 md:px-16 relative bg-white"
        style={{ zIndex: 100 }}
      >
        <h1
          className="text-5xl sm:text-6xl md:text-9xl font-extrabold mb-4"
          style={{ fontSize: "15rem", fontWeight: "900", marginBottom: "1rem" }}
        >
          MISI
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-4xl font-light leading-tight"
          style={{
            fontSize: "6rem",
            fontWeight: "300",
            lineHeight: "1",
            maxWidth: "80%",
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
