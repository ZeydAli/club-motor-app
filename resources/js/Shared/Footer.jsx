import React from "react";
import { MdCall } from "react-icons/md";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaFax,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  const iconStyles = {
    fontSize: "15px",
  };
  return (
    <>
      <footer id="kontak-section">
        <div className="bg-zinc-800 px-5 sm:px-20 2xl:px-72 py-10 flex items-center justify-between">
          <div className="flex flex-col gap-y-4">
            <div className="text-white font-kdam font-bold">
              <h2>READY TO HIT THE ROAD?</h2>
              <h2>
                REACH OUT TO US, <span className="text-red-800">NOW!</span>
              </h2>
            </div>
            <div className="text-red-800 flex items-center gap-x-2">
              <MdCall />
              <span className="text-white/70 text-sm">+62 8123456789</span>
            </div>
            <div className="text-red-800 flex items-center gap-x-2">
              <FaMapMarkerAlt />
              <a href="https://maps.app.goo.gl/vRNH4WjKjF34vCqcA">
                <span className="text-white/70 text-sm">
                  Jl. Candi Agung No. 4 Malang
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 text-white">
            <div className="flex gap-x-3 py-2">
              <a href="https://www.facebook.com/profile.php?id=100062908217044&mibextid=ZbWKwL">
                <div className="p-1.5 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 transition-all duration-200 ease-in">
                  <FaFacebookF style={iconStyles} />
                </div>
              </a>
              <a href="https://x.com/zeydalii?t=N8_hTz7SOO4nybev55QmZg&s=08">
                <div className="p-1.5 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 transition-all duration-200 ease-in">
                  <FaTwitter style={iconStyles} />
                </div>
              </a>
              <a href="https://instagram.com/soneauve?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                <div className="p-1.5 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 transition-all duration-200 ease-in">
                  <FaInstagram style={iconStyles} />
                </div>
              </a>
            </div>
            <div className="text-red-800 flex items-center gap-x-2">
              <FaFax />
              <span className="text-white/70 text-sm">(021) 3851193</span>
            </div>
            <div className="text-red-800 flex items-center gap-x-2">
              <IoMdMail />
              <span className="text-white/70 text-sm">ironhorse@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 text-white/60 text-xs py-4 text-center">
          Copyright 2023 @ All right reserved
        </div>
      </footer>
    </>
  );
}
