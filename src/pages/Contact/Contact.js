import React from "react";

const Contact = () => {
  return (
    <div className="font-poppins bg-white w-full px-0 z-50" style={{ position: "relative", zIndex: 100, backgroundColor: "white" }}>
      {/* Price List Section */}
      <div className="mb-16 text-left px-6 md:px-12">
        <h1 className="text-6xl md:text-9xl lg:text-[16rem] font-extrabold leading-none">PRICE LIST</h1>
        <h2 className="text-3xl md:text-5xl lg:text-[6rem] font-bold mt-4">LIVE CUMA Rp. 25.000-an</h2>
      </div>

      {/* Packages */}
      <div className="flex flex-col gap-0 w-full bg-gray-100">
        {/* Paket Basic */}
        <div className="p-6 md:p-12 bg-gray-200 w-full flex flex-col justify-center">
          <p className="text-6xl md:text-9xl lg:text-[12rem] font-extrabold leading-none">"</p>
          <h3 className="text-3xl md:text-5xl lg:text-[6rem] font-extrabold mb-6">PAKET BASIC</h3>
          <p className="text-2xl md:text-4xl lg:text-[4rem] mb-4">Rp. 28.000</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Live Rp. 28.000 per Jam</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Live di 1 platform</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Pilih Jadwal Sesuai kebutuhan</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Minimal order 3 hari</p>
        </div>

        {/* Paket Session */}
        <div className="p-6 md:p-12 bg-gray-300 w-full flex flex-col justify-center">
          <p className="text-6xl md:text-9xl lg:text-[12rem] font-extrabold leading-none">"</p>
          <h3 className="text-3xl md:text-5xl lg:text-[6rem] font-extrabold mb-6">PAKET SESSION</h3>
          <p className="text-2xl md:text-4xl lg:text-[4rem] mb-4">Rp. 80.000</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Sesi 1 = 08:00 - 11:00 WIB</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Sesi 2 = 11:00 - 14:00 WIB</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Sesi 3 = 14:00 - 17:00 WIB</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Sesi 4 = 17:00 - 20:00 WIB</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Sesi 5 = 20:00 - 23:00 WIB</p>
          <hr className="my-4" />
          <h3 className="text-base md:text-xl lg:text-[1.5rem] text-gray-700 font-garamond">Note:</h3>
          <p className="text-base md:text-xl lg:text-[1.5rem] text-gray-700 font-garamond">
            Live 3 Jam per Sesi dengan minimal order 5 hari <br />Live di 1 platform pilihan <br />Pilih waktu di luar jadwal yang tertera dikenai biaya tambahan sebesar 5% per paket, Minimal order 5 hari.
          </p>
        </div>

        {/* Paket Daily */}
        <div className="p-6 md:p-12 bg-gray-200 w-full flex flex-col justify-center">
          <p className="text-6xl md:text-9xl lg:text-[12rem] font-extrabold leading-none">"</p>
          <h3 className="text-3xl md:text-5xl lg:text-[6rem] font-extrabold mb-1">PAKET DAILY</h3>
          <p className="text-2xl md:text-4xl lg:text-[4rem] mb-4">Rp. 110.000</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Live 4 Jam per hari</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">08:00 - 12:00 / 12:00 - 16:00</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">16:00 - 20:00 / 20:00 - 23:59</p>
          <hr className="my-4" />
          <h3 className="text-base md:text-xl lg:text-[1.5rem] text-gray-700 font-garamond">Note:</h3>
          <p className="text-base md:text-xl lg:text-[1.5rem] text-gray-700 font-garamond">
            Live 4 Jam per hari dengan minimal order 5 hari Live di 1 platform pilihan <br />Pilih waktu di luar jadwal yang tertera dikenai biaya tambahan 5% per paket <br />Minimal order 3 hari
          </p>
        </div>
      </div>

      {/* Gold & Premium - Full Width */}
      <div className="flex flex-col md:flex-row gap-0 mt-12 w-full bg-gray-100">
        {/* Paket Gold */}
        <div className="p-6 md:p-12 bg-gray-300 w-full flex flex-col justify-center">
          <p className="text-6xl md:text-9xl lg:text-[12rem] font-extrabold leading-none">"</p>
          <h3 className="text-3xl md:text-5xl lg:text-[6rem] font-extrabold mb-6">PAKET GOLD</h3>
          <p className="text-2xl md:text-4xl lg:text-[4rem] mb-4">Rp. 3.100.000</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Live 30 hari per bulan</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">08:00 - 12:00 / 12:00 - 16:00</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">16:00 - 20:00 / 20:00 - 23:59</p>
          <hr className="my-4" />
          <h3 className="text-base md:text-xl lg:text-[1.5rem] text-gray-700 font-garamond">Note:</h3>
          <p className="text-base md:text-xl lg:text-[1.5rem] text-gray-700 font-garamond">
            Live 4 Jam per hari Live di 1 platform pilihan, untuk tambahan platform lain dikenakan biaya 90%. <br />Pilih waktu sesuai kebutuhan live online shop anda. <br />Setiap 1 jam tambahan dikenakan biaya Rp. 25.000.
          </p>
        </div>

        {/* Paket Premium */}
        <div className="p-6 md:p-12 bg-gray-200 w-full flex flex-col justify-center">
          <p className="text-6xl md:text-9xl lg:text-[12rem] font-extrabold leading-none">"</p>
          <h3 className="text-3xl md:text-5xl lg:text-[6rem] font-extrabold mb-6">PAKET PREMIUM</h3>
          <p className="text-2xl md:text-4xl lg:text-[4rem] mb-4">Rp. 4.490.000</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">Live 30 hari per bulan</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">12:00 - 18:00 WIB</p>
          <p className="text-base md:text-xl lg:text-[2rem] text-gray-700">18:00 - 23:59 WIB</p>
          <hr className="my-4" />
          <h3 className="text-base md:text-xl lg:text-[1.5rem] text-gray-700 font-garamond">Note:</h3>
          <p className="text-base md:text-xl lg:text-[1.5rem] text-gray-700 font-garamond">
            Live 6 Jam per hari Live di 1 platform pilihan, untuk tambahan platform lain dikenakan biaya 90%. <br />Pilih waktu sesuai kebutuhan live online shop anda. <br />Setiap 1 jam tambahan dikenakan biaya Rp. 25.000.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;