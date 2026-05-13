import React from "react";
import homebannerimage from "../assets/Images/banner.jpg";
import charcoal from "../assets/Images/charcoal.png";
import logo from "../assets/logo/hexa-logo.png";
import video1 from "../assets/videos/main-video.mp4";
import { ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, Building2, Flame, Globe, Globe2, Headphones, Inspect, LineChart, Mail, MapPin, Package, Phone, Search, ShieldCheck, ShoppingCart, Truck, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      {Homevideo()}
      {TrustSection()}
      {PortalSection()}
      {ProductsSection()}
      {WhyChooseSection()}
    </>
  );
}

function sample() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={homebannerimage}
        alt="banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-10">

        <div className="mt-15 max-w-4xl">

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            GLOBAL SOURCING & <br />
            SCRAP TRADING MADE SIMPLE
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Your trusted international partner for B2B industrial trading,
            scrap metals, charcoal products, and end-to-end product sourcing
            across 50+ countries.
          </p>

          {/* Buttons Row */}
          <div className="mt-10 flex flex-wrap items-center gap-5">

            {/* Buy */}
            <button className="
        rounded-2xl
        border
        border-white/10
        bg-white/10
        px-8
        py-4
        text-lg
        font-semibold
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:bg-orange-500
        hover:shadow-[0_10px_30px_rgba(255,115,0,0.35)]
      ">
              I WANT TO BUY
            </button>

            {/* Sell */}
            <button className="
        rounded-2xl
        border
        border-white/10
        bg-white/10
        px-8
        py-4
        text-lg
        font-semibold
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:bg-blue-500
        hover:shadow-[0_10px_30px_rgba(59,130,246,0.35)]
      ">
              I WANT TO SELL
            </button>

            {/* Source Product */}
            <button className="
        rounded-2xl
        bg-orange-500
        px-8
        py-4
        text-lg
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:bg-orange-600
        hover:shadow-[0_10px_30px_rgba(255,115,0,0.45)]
      ">
              SOURCE PRODUCT FOR ME
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

function Homevideo() {
  return (
    <>
      <section className="w-full h-[85dvh] overflow-hidden relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="px-6 md:px-8 text-white max-w-3xl">

            {/* Heading */}
            <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-5">
              GLOBAL SOURCING & <br />
              SCRAP TRADING MADE SIMPLE
            </h1>

            {/* Paragraph */}
            <p className="text-lg md:text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl">
              Buy, Sell or Source industrial materials and scrap products
              with trusted suppliers worldwide.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">

              {/* White + Blue */}
              <button
                className="
            bg-white text-[#17337a]
            px-6 py-3 rounded-md
            font-semibold
            hover:bg-gray-100
            transition
          "
              >
                I WANT TO BUY
              </button>

              {/* Outline */}
              <button
                className="
            border border-white
            text-white
            px-6 py-3 rounded-md
            font-semibold
            hover:bg-white hover:text-[#17337a]
            transition
          "
              >
                I WANT TO SELL
              </button>

              {/* Glassmorphism */}
              <button
                className="
            px-6 py-3 rounded-md
            font-semibold text-white
            border border-white/20
            bg-white/10
            backdrop-blur-md
            hover:bg-white/20
            transition
          "
              >
                SOURCE PRODUCT FOR ME
              </button>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

function TrustSection() {
  const features = [
    {
      icon: <Globe size={28} />,
      title: "IMPORT EXPORT LICENSE",
      description: "Licensed for International Import & Export Trading",
    },
    {
      icon: <Building2 size={28} />,
      title: "MSME REGISTERED",
      description: "Proudly Registered under MSME Government of India",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "GST VERIFIED",
      description: "GST Registered & Tax Compliant",
    },
    {
      icon: <Users size={28} />,
      title: "TRUSTED NETWORK",
      description: "Global Supplier & Buyer Network",
    },
  ];

  return (
    <section className="bg-white py-10 border-y border-gray-200">
      <div className="max-w-[1664px] mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-gray-200
                rounded-xl
                p-6
                flex items-start gap-4
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  min-w-[70px] h-[70px]
                  rounded-xl
                  bg-gradient-to-br
                  from-[#0c1429]
                  to-[#396aa5]
                  text-white
                  flex items-center justify-center
                  shadow-md
                "
              >
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm md:text-base font-bold text-[#0f172a] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortalSection() {
  const portals = [
    {
      icon: <ShoppingCart size={34} />,
      title: "BUYER PORTAL",
      description:
        "Purchase verified industrial products & scrap materials from trusted global suppliers with complete logistics support.",
      button: "Browse Products",
      border: "hover:border-[#ff6b35]",
      iconBg: "from-[#1e3a8a]/20 to-[#ff6b35]/20",
      iconBorder: "border-[#ff6b35]/40",
      glow: "bg-[#ff6b35]/10",
    },
    {
      icon: <Package size={34} />,
      title: "SELLER PORTAL",
      description:
        "Sell your scrap, charcoal and industrial materials globally and connect with genuine international buyers easily.",
      button: "Start Selling",
      border: "hover:border-[#2563eb]",
      iconBg: "from-[#2563eb]/20 to-[#60a5fa]/20",
      iconBorder: "border-[#2563eb]/40",
      glow: "bg-[#2563eb]/10",
    },
    {
      icon: <Search size={34} />,
      title: "PRODUCT SOURCING PORTAL ",
      description:
        "Can't find the required product? Our sourcing team will locate and negotiate the best industrial materials for you.",
      button: "Request Sourcing",
      border: "hover:border-[#16a34a]",
      iconBg: "from-[#16a34a]/20 to-[#4ade80]/20",
      iconBorder: "border-[#16a34a]/40",
      glow: "bg-[#16a34a]/10",
    },
  ];

  return (
    <section className="py-15 bg-white/25">
      <div className="max-w-[1660px] mx-auto px-4">

        {/* Left Content */}
        <div>
          <p className="text-orange-400 font-semibold  uppercase mb-3">
            Our Portals
          </p>

          <h2 className="text-3xl md:text-3xl font-bold text-[#0f172a] uppercase mb-10">
            Your Gateway to Global Trade
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {portals.map((item, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden
                bg-white
                border border-gray-200
                rounded-[15px]
                p-8
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                group
                ${item.border}
              `}
            >
              {/* Glow Circle */}
              <div
                className={`
                  absolute -bottom-10 -right-10
                  w-40 h-40 rounded-full blur-3xl
                  opacity-40 group-hover:opacity-70
                  transition duration-500
                  ${item.glow}
                `}
              ></div>

              {/* Icon */}
              <div
                className={`
                  w-20 h-20 rounded-[15px]
                  flex items-center justify-center
                  border backdrop-blur-md
                  bg-gradient-to-br
                  mb-8
                  text-[#17337a]
                  group-hover:scale-110
                  transition duration-500
                  ${item.iconBg}
                  ${item.iconBorder}
                `}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-2xl font-bold
                  text-[#0f172a]
                  mb-5 leading-tight
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[15px]
                  leading-[25px]
                  text-gray-600
                  mb-7
                "
              >
                {item.description}
              </p>

              {/* Link */}
              <button
                className="
                bg-amber-500/10
                border border-amber-500/30
                rounded-lg
                px-5 py-3
                  inline-flex items-center gap-2
                  text-[#ff5a1f]
                  font-semibold
                  text-lg
                  group-hover:gap-4
                  transition-all duration-300
                  text-[14px]
                "
              >
                {item.button}
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    {
      title: "Aluminium Scrap",
      image: charcoal,
      category: "Metals & Scrap",
      description:
        "High-quality recyclable aluminium scrap suitable for industrial reuse and export trading.",
    },
    {
      title: "Copper Scrap",
      image: charcoal,
      category: "Metals & Scrap",
      description:
        "Premium copper scrap materials sourced for manufacturing, recycling, and global supply.",
    },
    {
      title: "Metal Sheet Scrap",
      image: charcoal,
      category: "Metals & Scrap",
      description:
        "Industrial-grade metal sheet scrap available in bulk quantities for trading and processing.",
    },
    {
      title: "Activated Coconut Charcoal",
      image: charcoal,
      category: "Charcoal Products",
      description:
        "Eco-friendly activated coconut charcoal widely used for filtration and industrial applications.",
    },
  ];

  return (
    <section className="py-15 bg-[#fcfcfc] border-t-1 border-gray-200">
      <div className="max-w-[1660px] mx-auto px-4">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">

          {/* Left Content */}
          <div>
            <p className="text-orange-400 font-semibold  uppercase mb-3">
              Explore Our Products
            </p>

            <h2 className="text-3xl md:text-3xl font-bold text-[#0f172a] uppercase">
              Major Trading Products
            </h2>
          </div>

          {/* Right Arrows */}
          <div className="flex items-center gap-4">

            {/* Left Arrow */}
            <button
              className="
        w-12 h-12 rounded-full
        border border-[#1a4477]
        flex items-center justify-center
        text-[#1a4477]
        hover:bg-[#1a4477]
        hover:text-white
        transition-all duration-300
      "
            >
              <ArrowLeft size={17} />
            </button>

            {/* Right Arrow */}
            <button
              className="
        w-12 h-12 rounded-full
        bg-gradient-to-r
        from-[#192647]
        to-[#1a4477]
        flex items-center justify-center
        text-white
        shadow-md
        hover:scale-105
        transition-all duration-300
      "
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border border-gray-200
                hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-2
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden h-75">
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-500
                  "
                />

                {/* Category Badge */}
                <div
                  className="
                    absolute top-4 left-4
                    bg-white/90 backdrop-blur-sm
                    text-[#17337a]
                    text-xs font-semibold
                    px-3 py-1 rounded-full
                  "
                >
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0f172a] leading-snug mb-3">
                  {product.title}
                </h3>

                <h3 className="text-[14px] text-[#6d6d6d] leading-snug mb-5">
                  {product.description}
                </h3>

                {/* Buttons */}
                <div className="flex gap-3">

                  {/* Request */}
                  <button
                    className="
                      flex-1
                      border border-[#17337a]
                      text-[#17337a]
                      py-2 rounded-lg
                      font-medium text-sm
                      hover:bg-[#17337a]
                      hover:text-white
                      transition
                    "
                  >
                    Request
                  </button>

                  {/* Buy */}
                  <button
                    className="
                      flex-1
                      bg-gradient-to-r
                      from-[#192647]
                      to-[#1a4477]
                      text-white
                      py-2 rounded-lg
                      font-medium text-sm
                      hover:opacity-90
                      transition
                      flex items-center justify-center gap-2
                    "
                  >
                    <ShoppingCart size={16} />
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <button
            className="
              inline-flex items-center gap-3
              px-8 py-4 rounded-xl
              bg-gradient-to-r
              from-[#17337a]
              to-[#60a5fa]
              text-white font-semibold
              shadow-lg
              hover:scale-105
              transition
            "
          >
            <Flame size={20} />
            Explore All Products
          </button>
        </div> */}
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const features = [
    {
      icon: <Globe2 size={34} />,
      title: "Global Sourcing",
      description: "Worldwide supplier & buyer network",
    },
    {
      icon: <Zap size={34} />,
      title: "Fast Response",
      description: "Quick quotation and support process",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Verified Deals",
      description: "Transparent & trusted trading workflow",
    },
    {
      icon: <Truck size={34} />,
      title: "Logistics Support",
      description: "Shipping and export assistance",
    },
    {
      icon: <Headphones size={34} />,
      title: "Dedicated Support",
      description: "24/7 customer assistance team",
    },
  ];

  return (
    <section className="py-15 bg-white border-t border-gray-200">
      <div className="max-w-[1660px] mx-auto px-4">

        {/* Heading */}
        <div className="flex items-center justify-center gap-5 mb-14">
          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent to-[#ffad63]"></div>

          <h2
            className="
    text-3xl md:text-3xl font-bold uppercase text-center
    bg-gradient-to-r
    from-[#192647]
    via-[#1a4477]
    to-[#60a5fa]
    bg-clip-text
    text-transparent
  "
          >
            Why Choose Hexaura International
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-l from-transparent to-[#ffad63]"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                bg-white
                border border-gray-200
                rounded-[10px]
                p-7
                group
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                hover:border-[#1a4477]/20
              "
            >
              {/* Gradient Glow */}
              <div
                className="
                  absolute -top-10 -right-10
                  w-30 h-30 rounded-full
                  bg-gradient-to-br
                  from-[#1a4477]/10
                  to-[#60a5fa]/10
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                "
              ></div>

              {/* Icon */}
              <div
                className="
                  w-16 h-16 rounded-2xl
                  bg-gradient-to-br
                  from-[#192647]
                  to-[#1a4477]
                  text-white
                  flex items-center justify-center
                  mb-6
                  shadow-lg
                  group-hover:scale-110
                  transition duration-500
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-7 text-[15px]">
                {item.description}
              </p>

              {/* Bottom Line */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-1 w-0
                  bg-gradient-to-r
                  from-[#192647]
                  to-[#60a5fa]
                  group-hover:w-full
                  transition-all duration-500
                "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

