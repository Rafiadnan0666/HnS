import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white py-8 z-50"
      style={{
        position: "relative",
        zIndex: 100,
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      <div className="px-6">
        {/* HNS AGENCY Section */}
        <div className="mb-8">
          <h1
            className="text-left leading-none tracking-wide text-6xl sm:text-8xl md:text-9xl lg:text-[18rem]"
            style={{ lineHeight: "1" }}
          >
            HNS
          </h1>
          <h2
            className="text-left tracking-wide text-4xl sm:text-6xl md:text-8xl lg:text-[12rem]"
            style={{ lineHeight: "1" }}
          >
            AGENCY
          </h2>
        </div>

        {/* Main Footer Section */}
        <div className="flex flex-col gap-10 font-[Poppins]">
  {/* Site Links Section */}
  <div className="flex flex-col items-start">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Site</h2>
    <a
      href="#home"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      Home
    </a>
    <a
      href="#service"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      Service
    </a>
    <a
      href="#about"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      About
    </a>
    <a
      href="#contact"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      Contact
    </a>
  </div>

  {/* Social Media Section */}
  <div className="flex flex-col items-start">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Social Media</h2>
    <a
      href="#whatsapp"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      WhatsApp
    </a>
    <a
      href="#instagram"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      Instagram
    </a>
    <a
      href="#tiktok"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      TikTok
    </a>
    <a
      href="#facebook"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      Facebook
    </a>
    <a
      href="#linkedin"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      LinkedIn
    </a>
  </div>

  {/* FAQ Section */}
  <div className="flex flex-col items-start">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">FAQ / Bantuan</h2>
    <a
      href="#faq"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      Frequently Asked Questions
    </a>
    <a
      href="#support"
      className="text-gray-300 hover:text-white transition duration-300 text-lg sm:text-xl"
    >
      Support Center
    </a>
  </div>
</div>


        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} HNS AGENCY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
