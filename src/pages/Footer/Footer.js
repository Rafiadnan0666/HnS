import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 font-[Audiowide]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-gray-100 mb-4">HnS</h1>

        {/* Footer Links */}
        <div className="flex space-x-6 mb-4">
          <a
            href="#about"
            className="text-gray-400 hover:text-gray-100 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#service"
            className="text-gray-400 hover:text-gray-100 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-gray-100 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} HnS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
