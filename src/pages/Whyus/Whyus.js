import React from "react";

const Whyus = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 font-[Audiowide] overflow-hidden"
      id="service"
    >
      {/* Background Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "screen",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-4xl">
        <h2 className="text-6xl font-bold text-gray-100 mb-6">
          Why Choose <span className="text-[#34D399]">HnS Agency</span>?
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Host n Stream (HnS) Agency adalah layanan penyedia talent host
          profesional untuk kebutuhan live streaming e-commerce dan online shop
          Anda. Kami menghadirkan host berbakat, berpengalaman, dan berkomitmen
          untuk membantu Anda meningkatkan interaksi dengan pelanggan, membangun
          loyalitas merek, serta mendorong penjualan secara efektif.
        </p>
      </div>

      {/* Features */}
      <div className=" flex align-middle items-center z-10 flex-grow grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl px-6">
        {/* Feature 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Host Berpengalaman
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Semua talent kami terlatih dalam teknik komunikasi, penjualan, dan
            penguasaan produk.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Fleksibilitas & Kustomisasi
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Talent kami dapat menyesuaikan gaya penyampaian sesuai target
            audiens Anda.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Komitmen Profesional
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Kami memastikan performa optimal di setiap sesi live streaming Anda.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="relative z-10 mt-16 max-w-5xl text-center">
        <h3 className="text-4xl font-bold text-gray-100 mb-6">Layanan Kami</h3>
        <ul className="text-gray-400 text-lg leading-relaxed">
          <li>Penyediaan talent host live streaming untuk e-commerce.</li>
          <li>Pelatihan dan konsultasi strategi live streaming.</li>
          <li>Solusi kreatif untuk meningkatkan engagement audiens.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 mt-16 text-center">
        <h3 className="text-3xl font-bold text-[#34D399] mb-4">
          Mari Wujudkan Live Streaming Berkualitas!
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Tingkatkan penjualan dan bangun hubungan lebih dekat dengan pelanggan
          Anda bersama HnS Agency. Hubungi kami hari ini dan temukan talent host
          yang sesuai untuk kebutuhan bisnis Anda.
        </p>
        <button
          onClick={() =>
            window.location.assign(
              "https://api.whatsapp.com/send/?phone=+62%20896-5239-9694&text=Assalamualaikum&type=phone_number&app_absent=0"
            )
          }
          className="px-8 py-4 bg-[#34D399] text-gray-900 text-lg font-bold rounded-lg shadow-lg hover:bg-[#2EBF89] transition-all duration-300"
        >
          Hubungi Kami
        </button>
      </div>

      {/* Decorative Wave */}
      {/* <div className="absolute bottom-0 w-full h-[40vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          style={{
            fill: "#1f2937",
          }}
        >
          <path
            d="M0,160L40,186.7C80,213,160,267,240,250.7C320,235,400,149,480,122.7C560,96,640,128,720,133.3C800,139,880,117,960,122.7C1040,128,1120,160,1200,192C1280,224,1360,256,1400,272L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Whyus;