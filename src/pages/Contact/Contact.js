import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const platforms = [
    {
      name: "WhatsApp",
      link: "https://api.whatsapp.com/send/?phone=+62%20896-5239-9694&text=Assalamualaikum&type=phone_number&app_absent=0",
      icon: faWhatsapp,
      color: "#25D366",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/hostnstream/",
      icon: faInstagram,
      color: "#E1306C",
    },
    {
      name: "TikTok",
      link: "#", 
      icon: faTiktok,
      color: "#010101",
    },
    {
      name: "Facebook",
      link: "#",
      icon: faFacebook,
      color: "#1877F2",
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 font-[Audiowide] overflow-hidden px-6 sm:px-12"
      id="contact"
    >
      {/* Title */}
      <h2 className="text-6xl font-bold text-gray-100 mb-6 text-center">Get in Touch</h2>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#fff",
          fontFamily: "exo2",
        }}
        className="text-lg text-gray-400 mb-12 text-center max-w-2xl"
      >
        Connect with us through your favorite platform and let’s start building something amazing together!
      </p>

      {/* Contact Links */}
      <div className="flex flex-wrap justify-center gap-6">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 w-full sm:w-auto"
          >
            <FontAwesomeIcon
              icon={platform.icon}
              size="3x"
              style={{ color: platform.color }}
              className="mb-4"
            />
            <h3
              style={{
                fontSize: "1.5rem",
                color: "#fff",
                fontFamily: "exo2",
              }}
              className="text-2xl font-bold text-gray-100"
            >
              {platform.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
