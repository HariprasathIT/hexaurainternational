import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, Building2, BadgeCheck } from "lucide-react";

export default function Navbar() {
    return (
        <>
            {/* Top Header */}
            {/* <div className="w-full border-b border-white/10 bg-[#0A1733] text-white">
                <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 py-2">

                  
                    <div className="hidden lg:flex items-center gap-10 text-sm font-medium">

                        <div className="flex items-center gap-2">
                            <span className="text-orange-500">•</span>
                            <BadgeCheck size={14} className="text-green-400" />
                            <span>GST Verified</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-orange-500">•</span>
                            <Globe size={14} className="text-cyan-400" />
                            <span>50+ Countries Served</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-orange-500">•</span>
                            <Building2 size={14} className="text-gray-300" />
                            <span>Import Export Licensed</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-orange-500">•</span>
                            <BadgeCheck size={14} className="text-green-400" />
                            <span>MSME Registered</span>
                        </div>

                    </div>

                
                    <div className="hidden lg:flex items-center gap-6 text-sm">

                        <div className="flex items-center gap-2">
                            <Phone size={15} />
                            <span>+91 99999 99999</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail size={15} />
                            <span>info@hexauraintl.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                                in
                            </div>

                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                                tw
                            </div>

                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                                ig
                            </div>
                        </div>

                    </div>

                </div>
            </div> */}

            {/* Main Navbar */}
            <header className="fixed left-0 z-50 w-full px-5 pt-5">

                <div className="
    mx-auto
    flex
    max-w-[1800px]
    items-center
    justify-between
    rounded-3xl
    border
    border-white/10
    bg-white/5
    px-10
    py-5
    backdrop-blur-xl
    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
    relative
    overflow-hidden
  ">

                    {/* Glass Gradient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/[0.02] to-white/5"></div>

                    {/* Inner Border Glow */}
                    <div className="absolute inset-[1px] rounded-3xl border border-white/5"></div>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="relative z-10 flex items-center gap-4"
                    >

                        <div className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-orange-400
        to-orange-600
        text-4xl
        font-bold
        text-white
        shadow-[0_10px_30px_rgba(255,115,0,0.4)]
      ">
                            H
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold leading-none">
                                <span className="text-blue-400">Hex</span>
                                <span className="text-orange-400">aura</span>
                            </h1>

                            <p className="text-lg tracking-wide text-white/70">
                                International
                            </p>
                        </div>

                    </Link>

                    {/* Nav Links */}
                    <nav className="relative z-10 hidden xl:flex items-center gap-14">

                        <Link
                            to="/"
                            className="text-lg font-medium text-white/90 transition duration-300 hover:text-orange-400"
                        >
                            Home
                        </Link>

                        <Link
                            to="/buy-products"
                            className="text-lg font-medium text-white/90 transition duration-300 hover:text-orange-400"
                        >
                            Buy Products
                        </Link>

                        <Link
                            to="/sell-products"
                            className="text-lg font-medium text-white/90 transition duration-300 hover:text-orange-400"
                        >
                            Sell Products
                        </Link>

                        <Link
                            to="/product-sourcing"
                            className="text-lg font-medium text-white/90 transition duration-300 hover:text-orange-400"
                        >
                            Product Sourcing
                        </Link>

                        <Link
                            to="/enquiry"
                            className="text-lg font-medium text-white/90 transition duration-300 hover:text-orange-400"
                        >
                            Enquiry
                        </Link>

                        <Link
                            to="/about"
                            className="text-lg font-medium text-white/90 transition duration-300 hover:text-orange-400"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/contact"
                            className="text-lg font-medium text-white/90 transition duration-300 hover:text-orange-400"
                        >
                            Contact
                        </Link>

                    </nav>

                    {/* Button */}
                    <button className="
      relative
      z-10
      rounded-2xl
      border
      border-orange-400/30
      bg-orange-500/90
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      backdrop-blur-lg
      transition-all
      duration-300
      hover:scale-105
      hover:bg-orange-500
      hover:shadow-[0_10px_30px_rgba(255,115,0,0.45)]
    ">
                        Source a Product →
                    </button>

                </div>
            </header>
        </>
    );
}