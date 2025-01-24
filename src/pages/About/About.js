import React from "react";

const About = () => {
  return (
    <section  className="relative flex min-h-screen font-[Poppins] overflow-hidden pt-16 px-12 bg-transparent ml-auto" id="about" >
      {/* Left Side - Transparent and Empty */}
      <div className="flex-1 bg-transparent"></div>

      {/* Right Side - Content */}
      <div className="relative w-1/2 h-full flex flex-col justify-start items-start pt-16 px-12 bg-transparent ml-auto">
        <h2 className="text-9xl sm:text-6xl text-extrabold text-gray-400 mb-8" style={{
      fontSize : "24px"
    }}>Tentang Kami</h2>
        <h3 className="text-9xl sm:text-4xl font-bold text-black mb-4  " style={{
      fontSize : "5rem",
      fontFamily: "Bebas Neue, sans-serif",
    }}>HOST ANDAL ANDA CUAN TOTAL</h3>
        <p className="text-xl sm:text-2xl text-black leading-relaxed mb-6">
          HnS Agency adalah agensi yang menyediakan jasa talent host profesional untuk live streaming e-commerce dan platform digital lainnya. Kami menghubungkan klien dari berbagai industri dengan talent host yang memiliki keterampilan komunikasi luar biasa, mampu berinteraksi dengan audiens, dan memasarkan produk dengan cara yang menarik.
        </p>
        <p className="text-xl sm:text-2xl text-black leading-relaxed mb-6">
          Dengan fokus pada kualitas dan keahlian, kami menyediakan talent host yang telah terlatih untuk meningkatkan engagement audiens, mempercepat konversi penjualan, dan memberikan pengalaman belanja online yang menyenangkan. Agensi kami bekerja sama dengan berbagai platform seperti Shopee Live, Tokopedia, TikTok Shop, dan lainnya, membantu bisnis untuk tumbuh melalui sesi live streaming yang profesional dan efektif.
        </p>
        <p className="text-xl sm:text-2xl text-black leading-relaxed">
          Kami menawarkan berbagai pilihan talent host sesuai dengan kriteria dan kebutuhan klien, mulai dari fashion, kecantikan, elektronik, hingga produk rumah tangga. Setiap talent kami dipilih dengan seleksi ketat untuk memastikan mereka memiliki kemampuan berbicara yang kuat, penguasaan produk, dan kemampuan untuk beradaptasi dengan berbagai audiens.
        </p>
      </div>
    </section>
  );
};

export default About;
