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
        <p className="text-lg text-gray-400 leading-relaxed font-[Poppins] text-white">
          Host n Stream (HnS) Agency provides professional talent hosts for your
          live streaming e-commerce and online shop needs. We offer talented,
          experienced hosts committed to enhancing customer interaction,
          building brand loyalty, and driving sales effectively.
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl px-6 z-10">
        {/* Feature 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Experienced Hosts
          </h3>
          <p className="text-gray-400 leading-relaxed font-[Poppins] text-white">
            All our talents are trained in communication, sales techniques, and
            product mastery.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Flexibility & Customization
          </h3>
          <p className="text-gray-400 leading-relaxed font-[Poppins] text-white">
            Our talents can adapt their delivery style to match your audience's
            target.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Professional Commitment
          </h3>
          <p className="text-gray-400 leading-relaxed font-[Poppins] text-white">
            We ensure optimal performance in every live streaming session.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="relative z-10 mt-16 max-w-5xl text-center">
        <h3 className="text-4xl font-bold text-gray-100 mb-6">Our Services</h3>
        <ul className="text-gray-400 text-lg leading-relaxed font-[Poppins] text-white">
          <li>Providing live streaming talent hosts for e-commerce.</li>
          <li>Training and consultation on live streaming strategies.</li>
          <li>Creative solutions to increase audience engagement.</li>
        </ul>
      </div>

      {/* Pricing Plans */}
      <div className="relative z-10 mt-16 max-w-5xl text-center">
        <h3 className="text-4xl font-bold text-gray-100 mb-6">
          Our Pricing Plans
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Plan: Per Hour */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h4 className="text-2xl font-bold text-gray-500 mb-4">Per Hour</h4>
            <p className="text-lg text-gray-100 font-[Poppins]">Rp 25.000</p>
            <hr className="my-4 border-gray-700" />
            <ul className="text-gray-400 text-sm leading-loose font-[Poppins]">
              <li>Duration: Flexible</li>
              <li>Talent can be booked hourly based on your needs.</li>
            </ul>
          </div>

          {/* Plan: Per Session */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h4 className="text-2xl font-bold text-gray-500 mb-4">
              Per Session
            </h4>
            <p className="text-lg text-gray-100 font-[Poppins]">Rp 80.000</p>
            <hr className="my-4 border-gray-700" />
            <ul className="text-gray-400 text-sm leading-loose font-[Poppins]">
              <li>1 session = 4 working hours</li>
              <li>Available in 3 sessions:</li>
              <li>- Session 1: 08:00 - 12:00 WIB</li>
              <li>- Session 2: 12:00 - 16:00 WIB</li>
              <li>- Session 3: 18:00 - 22:00 WIB</li>
            </ul>
          </div>

          {/* Plan: Per Day */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h4 className="text-2xl font-bold text-gray-500 mb-4">Per Day</h4>
            <p className="text-lg text-gray-100 font-[Poppins]">Rp 230.000</p>
            <hr className="my-4 border-gray-700" />
            <ul className="text-gray-400 text-sm leading-loose font-[Poppins]">
              <li>Duration: 1 day = 12 working hours</li>
              <li>Full-day service with 3 sessions.</li>
            </ul>
          </div>

          {/* Plan: Monthly */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h4 className="text-2xl font-bold text-gray-500 mb-4">Monthly</h4>
            <p className="text-lg text-gray-100 font-[Poppins]">Rp 2.500.000</p>
            <hr className="my-4 border-gray-700" />
            <ul className="text-gray-400 text-sm leading-loose font-[Poppins]">
              <li>Unlimited sessions per month</li>
              <li>Ideal for frequent content creators.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="relative z-10 mt-12">
      <button
        style={{
          color: "white",
        }}
        onClick={() =>
          window.location.assign(
            "https://api.whatsapp.com/send/?phone=+6282227782062&text=Halo, HnS Agency! Saya tertarik menggunakan jasa talent host dari HnS Agency untuk kebutuhan live streaming. Apakah saya bisa mendapatkan informasi lebih lanjut?&type=phone_number&app_absent=0"
          )
        }
        className="z-50 px-6 py-3 sm:px-8 sm:py-4 bg-[#7c8884] text-gray-900 text-lg font-bold rounded-lg shadow-lg hover:bg-[#2EBF89] transition-all duration-300"
      >
        Hubungi Kami
      </button>
      </div>
    </section>
  );
};

export default Whyus;
