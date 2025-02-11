import React from "react";

const About = () => {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
        padding: "4rem 1.5rem",
        background: "transparent",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          padding: "2rem",
          background: "transparent",
        }}
      >
        <h2
          style={{
            fontSize: "1rem",
            color: "#888",
            fontWeight: "800",
            marginBottom: "1rem",
          }}
        >
          Tentang Kami
        </h2>
        <h3
          style={{
            fontSize: "3rem",
            fontFamily: "Bebas Neue, sans-serif",
            lineHeight: "1",
            fontWeight: "bold",
            color: "black",
            marginBottom: "1rem",
          }}
        >
          HOST ANDAL <br /> ANDA <br /> CUAN TOTAL
        </h3>
        <p
          style={{
            fontSize: "0.6",
            color: "black",
            lineHeight: "1.5",
            marginBottom: "1.5rem",
          }}
        >
          HnS Agency adalah agensi yang menyediakan layanan talent host
          profesional untuk kebutuhan live online shop, e-commerce dan platform
          digital lainnya. Kami menghubungkan klien dari berbagai industri
          dengan talent host yang memiliki keterampilan komunikasi luar biasa,
          mampu berinteraksi dengan audiens, dan memasarkan produk dengan cara
          yang menarik.
        </p>
        <p
          style={{
            fontSize: "0.6",
            color: "black",
            lineHeight: "1.5",
            marginBottom: "1.5rem",
          }}
        >
          Dengan fokus pada kualitas dan keahlian, kami menyediakan talent host
          yang telah terlatih untuk meningkatkan engagement audiens,
          memperkenalkan produk, dan memberikan pengalaman belanja online yang
          menyenangkan. Agensi kami membantu bisnis untuk tumbuh melalui sesi
          live streaming yang profesional, efisien dan efektif.
        </p>
        <p
          style={{
            fontSize: "0.6",
            color: "black",
            lineHeight: "1.5",
          }}
        >
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
