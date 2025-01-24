import React from "react";

const Contact = () => {
  return (
    <div
      className="font-poppins text-gra bg-white w-full px-0 z-50"
      style={{ position: "relative", zIndex: 100, backgroundColor: "white" }}
    >
      {/* Price List Section */}
      <div className="mb-16 text-left px-12">
        <h1 className="text-[16rem] font-extrabold leading-none">PRICE LIST</h1>
        <h2 className="text-[6rem] font-bold mt-4">LIVE CUMA Rp. 25.000-an</h2>
      </div>

      {/* Packages */}
      <div className="flex flex-row  gap-0 w-full bg-gray-100">
        {/* Paket Basic */}
        <div className="p-12 bg-gray-200 text-gra w-full flex flex-col justify-center">
          <p className="text-[12rem] font-extrabold leading-none font-poppins">
            "
          </p>
          <h3 className="text-[6rem] font-extrabold mb-6">PAKET BASIC</h3>
          <p className="font-poppins  text-[4rem] mb-4">Rp. 28.000</p>
          <p className="font-poppins  text-[2rem] text-gray-700">
            Live Rp. 28.000 per Jam
          </p>
          <p className="font-poppins  text-[2rem] text-gray-700">
            Live di 1 platform
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">
            Pilih Jadwal Sesuai kebutuhan
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">Minimal order 3 hari</p>
        </div>

        {/* Paket Session */}
        <div className="p-12 bg-gray-300 text-gra w-full flex flex-col justify-center">
          <p className="text-[12rem] font-extrabold leading-none font-poppins">
            "
          </p>
          <h3 className="text-[6rem] font-extrabold mb-6">PAKET SESSION</h3>
          <p className="font-poppins  text-[4rem] mb-4">Rp. 80.000</p>
          <p className="font-poppins text-gray-700  text-[2rem]">
            Sesi 1 = 08:00 - 11:00 WIB
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">
            Sesi 2 = 11:00 - 14:00 WIB
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">
            Sesi 3 = 14:00 - 17:00 WIB
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">
            Sesi 4 = 17:00 - 20:00 WIB
          </p>
          <p className="text-[2rem] text-gray-700">Sesi 5 = 20:00 - 23:00 WIB</p>
          <p className="text-[2.5rem] mt-4"></p>
          <hr />
          <h3 className=" text-gray-700 text-[1.5rem]" style={{
            fontFamily: "garamond"
          }}>Note: </h3>
          <p className="text-[1.5rem] text-gray-700" style={{
            fontFamily: "garamond"
          }}>
            Live 3 Jam per Sesi dengan minimal order 5 hari Live di 1 platform
            pilihan Pilih waktu di luar jadwal yang tertera dikenai biaya
            tambahan sebesar 5% per paket, Minimal order 5 hari.
          </p>
        </div>

        {/* Paket Daily */}
        <div className="p-12 bg-gray-200 text-gra w-full flex flex-col justify-center">
          <p className="text-[12rem] font-extrabold leading-none font-poppins">
            "
          </p>
          <h3 className="text-[6rem] font-extrabold mb-1">PAKET DAILY</h3>
          <p className="font-poppins  text-[4rem] mb-4">Rp. 110.000</p>
          <p className="font-poppins  text-[2rem] text-gray-700">
            Live 4 Jam per hari
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">
            08:00 - 12:00 / 12:00 - 16:00
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">
            16:00 - 20:00 / 20:00 - 23:59
          </p>
          <p className="font-poppins text-gray-700  text-[2rem] mt-4">
          </p>
          <hr />
          <h3 className=" text-gray-700 text-[1.5rem]" style={{
            fontFamily: "garamond"
          }}>Note: </h3>
          <p className="text-[1.5rem] text-gray-700" style={{
            fontFamily: "garamond"
          }}>
            Live 4 Jam per hari dengan minimal order 5 hari Live di 1 platform
            pilihan Pilih waktu di luar jadwal yang tertera dikenai biaya
            tambahan 5% per paket Minimal order 3 hari
          </p>
        </div>
      </div>

      {/* Gold & Premium - Full Width */}
      <div className="flex flex-row sm:flex-cols-2 gap-0 mt-12 w-full bg-gray-100">
        {/* Paket Gold */}
        <div className="p-12 bg-gray-300 text-gra w-full flex flex-col justify-center">
          <p className="text-[12rem] font-extrabold leading-none font-poppins">
            "
          </p>
          <h3 className="text-[6rem] font-extrabold mb-6">PAKET GOLD</h3>
          <p className="font-poppins  text-[4rem] mb-4">Rp. 3.100.000</p>
          <p className="font-poppins  text-[2rem] text-gray-700">
            Live 30 hari per bulan
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">
            08:00 - 12:00 / 12:00 - 16:00
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">
            16:00 - 20:00 / 20:00 - 23:59
          </p>
          <p className="font-poppins  text-[2rem] mt-4">
            
          </p>
          <hr />
          <h3 className=" text-gray-700 text-[1.5rem]" style={{
            fontFamily: "garamond"
          }}>Note: </h3>
          <p className="text-[1.5rem] text-gray-700" style={{
            fontFamily: "garamond"
          }}>
            Live 4 Jam per hari Live di 1 platform pilihan, untuk tambahan
            platform lain dikenakan biaya 90% Pilih waktu sesuai kebutuhan live
            streaming anda Setiap 1 jam tambahan dikenakan biaya Rp. 25.000
            * Tambah platform lain +90%
          </p>
        </div>

        {/* Paket Premium */}
        <div className="p-12 bg-gray-200 text-gra w-full flex flex-col justify-center">
          <p className="text-[12rem] font-extrabold leading-none font-poppins">
            "
          </p>
          <h3 className="text-[6rem] font-extrabold mb-6">PAKET PREMIUM</h3>
          <p className="font-poppins  text-[4rem] mb-4">Rp. 4.490.000</p>
          <p className="font-poppins  text-[2rem] text-gray-700">
            Live 30 hari per bulan
          </p>
          <p className="font-poppins text-gray-700  text-[2rem]">12:00 - 18:00 WIB</p>
          <p className="font-poppins text-gray-700  text-[2rem]">18:00 - 23:59 WIB</p>
          <p className="font-poppins text-gray-700  text-[2rem] mt-4">
           
          </p>
          <hr />
          <h3 className=" text-gray-700 text-[1.5rem]" style={{
            fontFamily: "garamond"
          }}>Note: </h3>
          <p className="text-[1.5rem] text-gray-700 font-" style={{
            fontFamily: "garamond"
          }}>
            Live 6 Jam per hari Live di 1 platform pilihan, untuk tambahan
            platform lain dikenakan biaya 80% Pilih waktu sesuai kebutuhan live
            streaming anda Setiap 1 jam tambahan dikenakan biaya Rp. 25.000
            * Tambah platform lain +80%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
