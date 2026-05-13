import { ArrowUpRight, Inspect, LineChart, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo/hexa-logo.png";


export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-[#071226]
        text-white
        pt-15 pb-6
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute top-0 left-0
          w-full h-full
          bg-gradient-to-br
          from-[#1a4477]/20
          via-transparent
          to-[#60a5fa]/10
          pointer-events-none
        "
      ></div>

      <div className="max-w-[1660px] mx-auto px-4 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 pb-14 border-b border-white/10">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt="Hexaura Logo"
                className="w-16 h-16 object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold leading-none">
                  HEXAURA
                </h2>

                <h2 className="text-2xl font-bold leading-none">
                  INTERNATIONAL
                </h2>
              </div>
            </div>

            <p className="text-gray-300 leading-6 text-[15px] mb-7">
              Global sourcing and trading company specializing in scrap,
              metals and charcoal products.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                <LineChart size={18} />,
                <LineChart size={18} />,
                <Inspect size={18} />,
                <Inspect size={18} />,
              ].map((icon, index) => (
                <button
                  key={index}
                  className="
                    w-11 h-11 rounded-full
                    bg-white/5
                    border border-white/10
                    backdrop-blur-xl
                    flex items-center justify-center
                    text-white
                    hover:bg-gradient-to-r
                    hover:from-[#192647]
                    hover:to-[#1a4477]
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-7">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "Home",
                "Buy Products",
                "Sell Products",
                "Product Sourcing",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="
                      text-gray-300
                      hover:text-[#ffad63]
                      hover:translate-x-2
                      inline-flex items-center gap-2
                      transition-all duration-300
                    "
                  >
                    <ArrowUpRight size={15} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-7">
              Our Products
            </h3>

            <ul className="space-y-4">
              {[
                "Aluminium Scrap",
                "Copper Scrap",
                "Metal Sheet Scrap",
                "Activated Coconut Charcoal",
                "Wood Charcoal",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="
                      text-gray-300
                      hover:text-[#ffad63]
                      hover:translate-x-2
                      inline-flex items-center gap-2
                      transition-all duration-300
                    "
                  >
                    <ArrowUpRight size={15} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-7">
              Company
            </h3>

            <ul className="space-y-4">
              {[
                "About Us",
                "Our License",
                "MSME Certificate",
                "GST Certificate",
                "Terms & Conditions",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="
                      text-gray-300
                     hover:text-[#ffad63]
                      hover:translate-x-2
                      inline-flex items-center gap-2
                      transition-all duration-300
                    "
                  >
                    <ArrowUpRight size={15} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-7">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div
                  className="
                    min-w-[45px] h-[45px]
                    rounded-xl
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                  "
                >
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-gray-300">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="
                    min-w-[45px] h-[45px]
                    rounded-xl
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                  "
                >
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-gray-300 break-all">
                    info@hexaurainternational.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    min-w-[45px] h-[45px]
                    rounded-xl
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                  "
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-gray-300 leading-7">
                    123, Industrial Area,
                    <br />
                    City, State - 000000, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
            pt-6
          "
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Hexaura International. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center gap-2">
            Designed by
            <span className="text-red-500 text-base">❤</span>
            Hariprasath
          </p>
        </div>
      </div>
    </footer>
  );
}
