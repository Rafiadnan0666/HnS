import React from "react";

const Contact = () => {
  return (
    <div  className="font-poppins text-black bg-white w-full px-0 z-50" style={{ position: "relative",
      zIndex: 100,
      backgroundColor: "white", }}>
      {/* Price List Section */}
      <div  className="mb-16 text-left px-12">
        <h1  className="text-[16rem] font-extrabold leading-none">PRICE LIST</h1>
        <h2  className="text-[6rem] font-bold mt-4">LIVE CUMA Rp. 25.000-an</h2>
      </div>

      {/* Packages */}
      <div  className="flex flex-row  gap-0 w-full bg-gray-100"> 
        {/* Paket Basic */}
        <div  className="p-12 bg-gray-200 text-black w-full flex flex-col justify-center">
          <p  className="text-[12rem] font-extrabold leading-none font-poppins">"</p>
          <h3  className="text-[6rem] font-extrabold mb-6">PAKET BASIC</h3>
          <p  className="text-[4rem] font-bold mb-4">Rp. 28.000</p>
          <p  className="text-[3rem]">Live Rp. 28.000 per Jam</p>
          <p  className="text-[3rem]">Live di 1 platform</p>
          <p  className="text-[3rem]">Pilih Jadwal Sesuai kebutuhan</p>
          <p  className="text-[3rem]">Minimal order 3 hari</p>
        </div>

        {/* Paket Session */}
        <div  className="p-12 bg-gray-300 text-black w-full flex flex-col justify-center">
          <p  className="text-[12rem] font-extrabold leading-none font-poppins">"</p>
          <h3  className="text-[6rem] font-extrabold mb-6">PAKET SESSION</h3>
          <p  className="text-[4rem] font-bold mb-4">Rp. 80.000</p>
          <p  className="text-[3rem]">Sesi 1 = 08:00 - 11:00 WIB</p>
          <p  className="text-[3rem]">Sesi 2 = 11:00 - 14:00 WIB</p>
          <p  className="text-[3rem]">Sesi 3 = 14:00 - 17:00 WIB</p>
          <p  className="text-[3rem]">Sesi 4 = 17:00 - 20:00 WIB</p>
          <p  className="text-[3rem]">Sesi 5 = 20:00 - 23:00 WIB</p>
          <p  className="text-[2.5rem] mt-4">* Minimal order 5 hari.</p>
        </div>

        {/* Paket Daily */}
        <div  className="p-12 bg-gray-200 text-black w-full flex flex-col justify-center">
          <p  className="text-[12rem] font-extrabold leading-none font-poppins">"</p>
          <h3  className="text-[6rem] font-extrabold mb-6">PAKET DAILY</h3>
          <p  className="text-[4rem] font-bold mb-4">Rp. 105.000</p>
          <p  className="text-[3rem]">Live 4 Jam per hari</p>
          <p  className="text-[3rem]">08:00 - 12:00 / 12:00 - 16:00</p>
          <p  className="text-[3rem]">16:00 - 20:00 / 20:00 - 23:59</p>
          <p  className="text-[2.5rem] mt-4">* Minimal order 3 hari.</p>
        </div>
      </div>

      {/* Gold & Premium - Full Width */}
      <div  className="flex flex-row sm:flex-cols-2 gap-0 mt-12 w-full bg-gray-100">
        {/* Paket Gold */}
        <div  className="p-12 bg-gray-300 text-black w-full flex flex-col justify-center">
          <p  className="text-[12rem] font-extrabold leading-none font-poppins">"</p>
          <h3  className="text-[6rem] font-extrabold mb-6">PAKET GOLD</h3>
          <p  className="text-[4rem] font-bold mb-4">Rp. 3.050.000</p>
          <p  className="text-[3rem]">Live 30 hari per bulan</p>
          <p  className="text-[3rem]">08:00 - 12:00 / 12:00 - 16:00</p>
          <p  className="text-[3rem]">16:00 - 20:00 / 20:00 - 23:59</p>
          <p  className="text-[2.5rem] mt-4">* Tambah platform lain +90%</p>
        </div>

        {/* Paket Premium */}
        <div  className="p-12 bg-gray-200 text-black w-full flex flex-col justify-center">
          <p  className="text-[12rem] font-extrabold leading-none font-poppins">"</p>
          <h3  className="text-[6rem] font-extrabold mb-6">PAKET PREMIUM</h3>
          <p  className="text-[4rem] font-bold mb-4">Rp. 4.400.000</p>
          <p  className="text-[3rem]">Live 30 hari per bulan</p>
          <p  className="text-[3rem]">12:00 - 18:00 WIB</p>
          <p  className="text-[3rem]">18:00 - 23:59 WIB</p>
          <p  className="text-[2.5rem] mt-4">* Tambah platform lain +80%</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;