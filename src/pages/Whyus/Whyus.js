import React from "react";

const Whyus = () => {
  return (
    <div className="font-poppins bg-white text-black">
      {/* Visi Section */}
      <section className="min-h-0.5 md:h-10 lg:md:h-10 sm:md:h-10 flex flex-col justify-center items-start px-6 md:px-16 relative bg-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4">VISI</h1>
        <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl">
          Menjadi mitra terdepan dalam menyediakan layanan host live yang profesional, dan terpercaya, guna mendukung interaksi, promosi, dan penjualan bagi pelaku online shop dan e-commerce.
        </p>
      </section>

      {/* Misi Section */}
      <section className="min-h-0.5 flex flex-col md:h-10 lg:md:h-10 sm:md:h-10 justify-center items-start px-6 md:px-16 relative bg-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4">MISI</h1>
        <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl">
          Memberikan layanan dengan harga yang kompetitif tanpa mengorbankan kualitas, sehingga dapat diakses oleh berbagai pelaku bisnis.
        </p>
      </section>

      {/* Layanan Kami Section */}
      <section className="min-h-0.5 flex flex-col justify-center items-start px-6 md:px-16 bg-white" >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4">LAYANAN KAMI</h1>
        <p className="text-lg font-semibold">HOSTNSTREAM@GMAIL.COM | 0822-2778-2062</p>

        <div className="mt-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold" style={{
        fontStyle:"Poppins"
      }}>PENYEDIA TALENT HOST LIVE OLSHOP</h2>
            <p className="text-base">Host berpengalaman & profesional untuk berbagai platform seperti Shopee Live, Tiktok Live, Lazada Live, dll.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold" style={{
        fontStyle:"Poppins"
      }}>PELATIHAN HOST</h2>
            <p className="text-base">Pelatihan rutin dan terstruktur untuk host, menjamin kualitas dan keterampilan host yang terus berkembang dan selalu up-to-date dengan tren live streaming.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold" style={{
        fontStyle:"Poppins"
      }}>MANAJEMEN JADWAL HOST</h2>
            <p className="text-base">Layanan penjadwalan dan koordinasi untuk memastikan live streaming berjalan lancar.</p>
          </div>
        </div>
      </section>

      {/* Siapa yang Cocok Menggunakan Jasa Kami */}
      <section className="min-h-0.5 flex flex-col justify-center items-start px-6 md:px-16 bg-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 " style={{
          lineHeight:"5rem"
        }}>SIAPA YANG COCOK MENGGUNAKAN JASA KAMI?</h1>
        <p className="text-lg font-semibold">HOSTNSTREAM@GMAIL.COM | 0822-2778-2062</p>
        <p className="text-base mt-4 max-w-3xl">
          Brand & Online Shop kamu yang nggak mau repot dan nggak ada waktu lagi buat urusin jadwal host dan cari host yang pas dengan kriteria yang dibutuhin? Kami siap bantu klien dengan talent host profesional yang langsung stand by!
        </p>
      </section>
    </div>
  );
};

export default Whyus;
