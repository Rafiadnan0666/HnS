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
        <h2 className="md:text-left sm:text-left lg:text-left"
          style={{
            fontSize: "1rem",
            color: "#888",
            fontWeight: "800",
            marginBottom: "1rem",
          }}
        >
          Tentang Kami
        </h2>
        <h3 className="md:text-left sm:text-left lg:text-left"
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
        <p className="md:text-left sm:text-left lg:text-left" 
          style={{
            fontSize: "0.6rem",
            color: "black",
            lineHeight: "1.5",
            marginBottom: "1.5rem",
          }}
        >
          HnS Agency adalah partner terbaik untuk bisnis yang ingin sukses di dunia Live Sale! 
          Kami menyediakan talent host profesional yang siap membawa sesi live shopping Anda ke level berikutnya.
          Dengan keterampilan komunikasi yang luar biasa, host kami mampu menarik perhatian audiens,
          membangun interaksi yang seru, menarik dan up-to-date, mempromosikan produk sesuai dengan brand dan target audiens
          di berbagai platform.
        </p>
        <p className="md:text-left sm:text-left lg:text-left"
          style={{
            fontSize: "0.6rem",
            color: "black",
            lineHeight: "1.5",
            marginBottom: "1.5rem",
          }}
        >
          Kami percaya bahwa live streaming bukan sekadar jualan, 
          tapi juga tentang pengalaman belanja yang engaging dan menyenangkan!
          Itulah kenapa semua host di HnS Agency telah melalui pelatihan intensif,
          sehingga mampu membawakan sesi live yang up-to-date, dinamis, interaktif, dan efektif 
          dalam memperkenalkan produk serta menjaga engagement audiens
        </p>
        <p className="md:text-left sm:text-left lg:text-left"
          style={{
            fontSize: "0.6rem",
            color: "black",
            lineHeight: "1.5",
          }}
        >
          Apapun industri Anda—fashion, kecantikan, elektronik, atau lainnya—kami 
          punya host yang tepat sesuai kebutuhan brand Anda! Dengan seleksi ketat, 
          kami memastikan setiap talent dapat menyesuaikan gaya komunikasi dengan target pasar, 
          selalu up-to-date dan menyesuaikan dengan tren live yang sedang berkembang
          sehingga live shopping Anda lebih profesional, efisien, dan menghasilkan interaksi yang tinggi 
          serta meningkatkan peluang konversi penjualan secara maksimal.
        </p>
      </div>
    </section>
  );
};

export default About;