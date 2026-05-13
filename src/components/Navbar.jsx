import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Globe,
  Building2,
  BadgeCheck,
  ChevronDown,
  Search,
} from "lucide-react";

import logo from "../assets/logo/hexa-logo.png";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      {/* TOP BAR */}
      <div className="border-b border-gray-200 bg-[#f8f8f8]">
        <div className="max-w-[1664px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between py-2 gap-3 text-sm text-gray-700">

            {/* LEFT */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>Import Export Licensed</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span>MSME Registered</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

              <div className="flex items-center gap-2">
                <BadgeCheck size={16} />
                <span>GST Verified</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-blue-700 transition"
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>

              <a
                href="mailto:info@hexaurainternational.com"
                className="flex items-center gap-2 hover:text-blue-700 transition"
              >
                <Mail size={16} />
                <span>info@hexaurainternational.com</span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white">
        <div className="max-w-[1664px] mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Hexaura International Logo"
                className="w-18"
              />

              <div>
                <h1 className="text-[20px] font-bold leading-none text-[#0d1b3d]">
                  HEXAURA
                </h1>

                <h2 className="text-[20px] font-bold leading-none text-[#0d1b3d]">
                  INTERNATIONAL
                </h2>

                <p className="text-[14px] text-gray-500 mt-1">
                  Sourcing | Trading | Import Export
                </p>
              </div>
            </Link>

            {/* MENU */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
              <Link
                to="/"
                className="relative text-[#0d1b3d] font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#0d1b3d]"
              >
                Home
              </Link>

              <div className="group relative cursor-pointer">
                <div className="flex items-center gap-1 hover:text-[#0d1b3d]">
                  Buy Products
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="flex items-center gap-1 hover:text-[#0d1b3d]">
                  Sell Products
                  <ChevronDown size={16} />
                </div>
              </div>

              <Link
                to="#"
                className="hover:text-[#0d1b3d]"
              >
                Product Sourcing
              </Link>

              <Link to="#" className="hover:text-[#0d1b3d]">
                Enquiry
              </Link>

              <Link to="#" className="hover:text-[#0d1b3d]">
                About Us
              </Link>

              <Link to="support" className="hover:text-[#0d1b3d]">
                Contact Us
              </Link>
            </nav>

            {/* BUTTON */}
            <button className="hidden lg:flex items-center gap-2 bg-[#0d1b3d] hover:bg-[#13295c] text-white px-5 py-3 rounded-md shadow-md transition">
              <Search size={18} />
              <span>Source a Product</span>
            </button>

            {/* MOBILE MENU ICON */}
            <button className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#0d1b3d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}