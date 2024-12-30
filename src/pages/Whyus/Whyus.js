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
          Why Choose <span className="text-gray-500">HnS Agency</span>?
        </h2>
        <p  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} className="text-lg text-gray-400 leading-relaxed">
          Host n Stream (HnS) Agency adalah layanan penyedia talent host
          profesional untuk kebutuhan live streaming e-commerce dan online shop
          Anda. Kami menghadirkan host berbakat, berpengalaman, dan berkomitmen
          untuk membantu Anda meningkatkan interaksi dengan pelanggan, membangun
          loyalitas merek, serta mendorong penjualan secara efektif.
        </p>
      </div>

      {/* Features */}
      <div className=" flex align-middle items-center z-10 flex-grow grid-cols-1 sm:block sm:flex-col mx-5 md:grid-cols-3 gap-8 mt-12 max-w-6xl px-6">
        {/* Feature 1 */}
        <div className="bg-gray-800 mx-5 mt-10 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Host Berpengalaman
          </h3>
          <p  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} className="text-gray-400 leading-relaxed">
            Semua talent kami terlatih dalam teknik komunikasi, penjualan, dan
            penguasaan produk.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800 mx-5 mt-10 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <h3  className="text-2xl font-bold text-gray-100 mb-2">
            Fleksibilitas & Kustomisasi
          </h3>
          <p  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} className="text-gray-400 leading-relaxed">
            Talent kami dapat menyesuaikan gaya penyampaian sesuai target
            audiens Anda.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800 mx-5 mt-10 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <h3  className="text-2xl font-bold text-gray-100 mb-2">
            Komitmen Profesional
          </h3>
          <p  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} className="text-gray-400 leading-relaxed">
            Kami memastikan performa optimal di setiap sesi live streaming Anda.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="relative z-10 mt-16 max-w-5xl text-center">
        <h3 className="text-4xl font-bold text-gray-100 mb-6">Layanan Kami</h3>
        <ul className="text-gray-400 text-lg leading-relaxed">
          <li  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>Penyediaan talent host live streaming untuk e-commerce.</li>
          <li  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>Pelatihan dan konsultasi strategi live streaming.</li>
          <li  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>Solusi kreatif untuk meningkatkan engagement audiens.</li>
        </ul>
      </div>

      {/* Pricing Plans */}
      <div className="relative z-10 mt-16 max-w-5xl text-center">
        <h3  className="text-4xl font-bold text-gray-100 mb-6">
          Paket Harga Kami
        </h3>
        <div className="grid grid-cols-1 align-middle sm:block grid-cols-4 mt-10  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Plan: Per Jam */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h4  className="text-2xl font-bold text-gray-500 mb-4">Per Jam</h4>
            <p  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} className="text-lg text-gray-100">Rp 25.000</p>
            <hr className="my-4 border-gray-700" />
            <ul className="text-gray-400 text-sm leading-loose">
              <li  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>Durasi: Bebas Pilih</li>
              <li  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>Talent dapat dipesan per jam sesuai kebutuhan.</li>
            </ul>
          </div>

          {/* Plan: Per Sesi */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h4  className="text-2xl font-bold text-gray-500 mb-4">Per Sesi</h4>
            <p  style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} className="text-lg text-gray-100">Rp 80.000</p>
            <hr className="my-4 border-gray-700" />
            <ul className="text-gray-400 text-sm leading-loose">
              <li style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>1 sesi = 4 jam kerja</li>
              <li style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} >Tersedia 3 sesi:</li>
              <li style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} >- Sesi 1: 08:00 WIB - 12:00 WIB</li>
              <li style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} >- Sesi 2: 12:00 WIB - 16:00 WIB</li>
              <li style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} >- Sesi 3: 18:00 WIB - 22:00 WIB</li>
            </ul>
          </div>

          {/* Plan: Per Hari */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h4  className="text-2xl font-bold text-gray-500 mb-4">Per Hari</h4>
            <p style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} className="text-lg text-gray-100">Rp 230.000</p>
            <hr className="my-4 border-gray-700" />
            <ul className="text-gray-400 text-sm leading-loose">
              <li style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>Durasi: 1 hari = 12 jam kerja</li>
              <li style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>Talent bekerja penuh selama 12 jam dalam sehari.</li>
            </ul>
          </div>

          {/* Plan: Per Bulan */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h4 className="text-2xl font-bold text-gray-500 mb-4">
              Per Bulan
            </h4>
            <p style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} className="text-lg text-gray-100">Rp 6.849.000</p>
            <hr className="my-4 border-gray-700" />
            <ul className="text-gray-400 text-sm leading-loose">
              <li style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>Durasi: 1 bulan = 30 hari kerja</li>
              <li style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }}>Talent bekerja selama 30 hari dalam sebulan.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 mt-16 text-center">
        <h3 className="text-3xl font-bold text-gray-500 mb-4">
          Mari Wujudkan Live Streaming Berkualitas!
        </h3>
        <p style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "Poppins"
        }} className="text-gray-400 text-lg leading-relaxed mb-6">
          Tingkatkan penjualan dan bangun hubungan lebih dekat dengan pelanggan
          Anda bersama HnS Agency. Hubungi kami hari ini dan temukan talent host
          yang sesuai untuk kebutuhan bisnis Anda.
        </p>
        <button style={{
        color : "white"
      }}
        onClick={() =>
          window.location.assign(
            "https://api.whatsapp.com/send/?phone=+6282227782062&text=Halo, HnS Agency! Saya tertarik menggunakan jasa talent host dari HnS Agency untuk kebutuhan live streaming. Apakah saya bisa mendapatkan informasi lebih lanjut?&type=phone_number&app_absent=0"
          )
        }
        className="z-50 px-8 py-4 bg-[#7c8884] text-gray-900 text-lg font-bold rounded-lg shadow-lg hover:bg-[#2EBF89] transition-all duration-300"
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
