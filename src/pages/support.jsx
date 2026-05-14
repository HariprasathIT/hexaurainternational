import React from "react";
import video1 from "../assets/videos/support-video.mp4";
import supportimg from "../assets/images/support-img.jpg";

export default function Support() {
  return (
    <>
      {/* <Supportvideo /> */}
      <Supportform />
    </>
  );
}

function Supportvideo() {
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest">
            Support
          </h1>

          <p className="mt-5 max-w-2xl text-sm md:text-lg text-gray-200">
            Need help with our services or products? Reach out to our support
            team and we’ll assist you quickly.
          </p>
        </div>
      </section>
    </>
  );
}

function Supportform() {
  return (
    <>
      <section className="w-full bg-white py-6 px-5 md:px-5 lg:px-5">
        <div className="max-w-[1660px] mx-auto grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[10px] border border-gray-200">

          {/* Left Side Image */}
          <div className="w-full h-[80dvh] overflow-hidden relative group">
            <img
              src={supportimg}
              alt="support"
              className="w-full h-full object-cover scale-105 group-hover:scale-110 duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 p-5 md:p-5 text-white z-10w-full ">

              {/* Glassmorphism Box */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[15px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] max-w-md">

                <p className="uppercase tracking-[3px] text-sm mb-3 text-gray-200">
                  Support Team
                </p>

                <h2 className="text-4xl md:text-4xl font-bold leading-tight uppercase">
                  We’re Here To Help You
                </h2>

                <p className="mt-5 text-gray-200 max-w-md leading-relaxed">
                  Contact our support team anytime and we’ll help you solve your
                  issues quickly and smoothly.
                </p>

              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full bg-white flex items-center">
            <div className="w-full px-6 py-10 md:px-12 lg:px-12">

              <p className="uppercase tracking-[3px] text-orange-400 mb-3 text-sm">
                Contact Us
              </p>

              <h2
                className="
    text-4xl md:text-4xl font-bold mb-10 leading-tight
    bg-gradient-to-r
    from-[#192647]
    via-[#1a4477]
    to-[#60a5fa]
    bg-clip-text
    text-transparent
  "
              >
                Any Querries? write us a message
              </h2>


              <form className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 bg-gray-50 text-black px-5 py-4 rounded-xl outline-none focus:border-black focus:bg-white duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600 font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 bg-gray-50 text-black px-5 py-4 rounded-xl outline-none focus:border-black focus:bg-white duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600 font-medium">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 bg-gray-50 text-black px-5 py-4 rounded-xl outline-none focus:border-black focus:bg-white duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  className="
    bg-gradient-to-r
    from-[#192647]
    to-[#1a4477]
    text-white
    px-10 py-4
    rounded-xl
    font-semibold
    hover:scale-105
    hover:opacity-95
    duration-300
    cursor-pointer
    shadow-lg
  "
                >
                  Send Message
                </button>

              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
