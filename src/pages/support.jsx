import React from "react";
import video1 from "../assets/videos/support-video.mp4";
import supportimg from "../assets/images/support-img.jpg";

export default function Support() {
  return (
    <>
      <Supportvideo />
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
      <section className="w-full bg-black text-white py-20 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side Image */}
          <div className="w-full h-[650px] overflow-hidden rounded-3xl">
            <img
              src={supportimg}
              alt="support"
              className="w-full h-full object-cover hover:scale-110 duration-700"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full">
            <p className="uppercase tracking-[5px] text-gray-400 mb-3">
              Contact Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Let’s Solve Your <br /> Problems Faster
            </h2>

            <form className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-700 bg-transparent px-5 py-4 rounded-xl outline-none focus:border-white duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-700 bg-transparent px-5 py-4 rounded-xl outline-none focus:border-white duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-700 bg-transparent px-5 py-4 rounded-xl outline-none focus:border-white duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full border border-gray-700 bg-transparent px-5 py-4 rounded-xl outline-none focus:border-white duration-300 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button className="bg-white text-black px-10 py-4 rounded-xl font-semibold hover:bg-gray-300 duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}