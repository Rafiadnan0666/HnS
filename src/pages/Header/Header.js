import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "8rem", // Adjusted for better centering
          fontWeight: "900",
          fontFamily: "Bebas Neue, sans-serif",
          lineHeight: "0.9",
          marginBottom: "1rem",
          transition: "all 0.3s ease-in-out",
        }}
      >
        HNS AGENCY
      </h1>
      <p
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          fontFamily: "Poppins, sans-serif",
          lineHeight: "1.2",
          marginBottom: "1.5rem",
          transition: "all 0.3s ease-in-out",
        }}
      >
        Layanan Penyedia Host Live Sale untuk Live Online Shop dan E-Commerce
      </p>
      <button
        style={{
          padding: "0.6rem 1.5rem",
          fontSize: "1.2rem",
          fontWeight: "600",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          border: "none",
          transition: "all 0.3s ease-in-out",
        }}
        onClick={() =>
          window.location.assign(
            "https://api.whatsapp.com/send/?phone=+6282227782062&text=Halo, HnS Agency. Saya tertarik menggunakan jasa Anda dan ingin mendapatkan informasi lebih lanjut. Bisa dibantu??&type=phone_number&app_absent=0"
          )
        }
      >
        Hubungi Kami
      </button>

      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 6rem !important;
            }
            p {
              font-size: 1.8rem !important;
            }
            button {
              font-size: 1.2rem !important;
              padding: 0.5rem 1.2rem !important;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 4rem !important;
            }
            p {
              font-size: 1.5rem !important;
            }
            button {
              font-size: 1rem !important;
              padding: 0.4rem 1rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
